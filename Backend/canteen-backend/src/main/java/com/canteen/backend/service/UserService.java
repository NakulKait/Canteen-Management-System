package com.canteen.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.canteen.backend.model.User;
import com.canteen.backend.repository.UserRepository;

import com.canteen.backend.service.*;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserService implements IUserService {

    
    private UserRepository userRepository;
    private SequenceGeneratorService sequenceGenerator;

//    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User userTemp = new User();
        userTemp.setId(sequenceGenerator.generateSequence(User.SEQUENCE_NAME));
        userTemp.setFullName(user.getFullName());
        userTemp.setEmail(user.getEmail());
        userTemp.setRole(user.getRole());
        userTemp.setPassword(user.getPassword());

        // ✅ Fix: also copy verified flag
        userTemp.setVerified(user.isVerified());

        return userRepository.save(userTemp);
    }


    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public boolean checkPassword(String rawPassword, String encodedPassword) {
        // Just compare plain text passwords directly (NOT SECURE)
        return rawPassword.equals(encodedPassword);
    }


}
