package com.canteen.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.canteen.backend.dto.UserDetailsDto;
import com.canteen.backend.model.User;
import com.canteen.backend.repository.AdminRepository;
import com.canteen.backend.repository.OrdersRepository;
import com.canteen.backend.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class AdminService implements IAdminService{

	 private AdminRepository adminRepository;
	
      private UserRepository userRepository;
      
      private OrdersRepository orderRepository;
      
      private ModelMapper modelMapper;
	
	
	@Override
	public Integer getNoOfUsers() {
		long totalUsers=userRepository.count();
		return (int) totalUsers;
	}


	@Override
	public Integer getTotalOrders() {
		long totalOrders=orderRepository.count();
		return (int) totalOrders;
	}


	@Override
	public List<UserDetailsDto> getAllUsers() {
		List<User> list=userRepository.findAll();
		
		
	   return list.stream().map(user->modelMapper.map(user,UserDetailsDto.class))
			   .collect(Collectors.toList());
	}

}
