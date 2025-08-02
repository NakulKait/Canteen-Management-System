package com.canteen.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.canteen.backend.repository.AdminRepository;
import com.canteen.backend.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class AdminService implements IAdminService{

	private AdminRepository adminRepository;
	
      private UserRepository userRepository;
	
	
	@Override
	public int getNoOfUsers() {
		long totalUsers=userRepository.count();
		return (int) totalUsers;
	}

}
