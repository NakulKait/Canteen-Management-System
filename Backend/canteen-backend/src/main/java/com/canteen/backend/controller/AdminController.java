package com.canteen.backend.controller;



import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.canteen.backend.service.IAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
	
	
	@Autowired
	private IAdminService adminService;
	
	
	@GetMapping("/users")
	public ResponseEntity<?> getTotalUsers() {
	    Map<String, Integer> response = new HashMap<>();
	    response.put("totalUsers", adminService.getNoOfUsers());
	    return ResponseEntity.ok(response);
	}


	
	

}
