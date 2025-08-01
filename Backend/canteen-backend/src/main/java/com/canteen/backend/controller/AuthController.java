package com.canteen.backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.canteen.backend.dto.OTPRequest;
import com.canteen.backend.model.User;
import com.canteen.backend.service.IUserService;
import com.canteen.backend.service.MailService;
import com.canteen.backend.service.OTPService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class AuthController {

	@Autowired
	private IUserService userService;

	@Autowired
	private MailService mailService;

	@Autowired
	private OTPService otpService;

	private Map<String, User> pendingUsers = new HashMap<>();

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
	    if (user.getEmail() == null || user.getEmail().isEmpty()) {
	        return ResponseEntity.status(400).body(Map.of("message", "Email is required"));
	    }

	    Optional<User> existingUser = userService.findByEmail(user.getEmail());
	    if (existingUser.isPresent()) {
	        return ResponseEntity.status(400).body(Map.of("message", "Email already exists"));
	    }

	    try {
	        String otp = otpService.generateOTP(user.getEmail());
	        mailService.sendOTPEmail(user.getEmail(), otp);
	        pendingUsers.put(user.getEmail(), user);
	        return ResponseEntity.ok(Map.of("message", "OTP sent to email"));
	    } catch (Exception e) {
	        return ResponseEntity.status(500).body(Map.of("message", "Failed to send OTP", "error", e.getMessage()));
	    }
	}


	@PostMapping("/verify-otp")
	public ResponseEntity<?> verifyOtp(@RequestBody OTPRequest payload) {
	    String email = payload.getEmail();
	    String otp = payload.getOtp();

	    if (otpService.verifyOTP(email, otp)) {
	        User user = pendingUsers.get(email);
	        if (user == null) {
	            return ResponseEntity.status(400).body(Map.of("message", "User not found for email"));
	        }

	        user.setVerified(true); 
	        userService.registerUser(user);
	        mailService.sendRegistrationEmail(user); 

	        otpService.clearOTP(email);
	        pendingUsers.remove(email);
	        return ResponseEntity.ok(Map.of("message", "User registered successfully"));
	    } else {
	        return ResponseEntity.status(400).body(Map.of("message", "Invalid OTP"));
	    }
	}

	// Login user
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginData) {
		String email = loginData.get("email");
		String password = loginData.get("password");

		Optional<User> optionalUser = userService.findByEmail(email);
		if (optionalUser.isEmpty()) {
			return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
		}

		User user = optionalUser.get();

		if (!userService.checkPassword(password, user.getPassword())) {
			return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
		}

		if (!user.isVerified()) {
			return ResponseEntity.status(401).body(Map.of("message", "Please verify your email before logging in."));
		}

		Map<String, Object> response = new HashMap<>();
		response.put("fullName", user.getFullName());
		response.put("email", user.getEmail());
		response.put("role", user.getRole());
		response.put("message", "Login successful");

		return ResponseEntity.ok(response);
	}
}
