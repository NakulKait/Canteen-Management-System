package com.canteen.backend.service;

import java.util.List;

import com.canteen.backend.dto.UserDetailsDto;

public interface IAdminService {
	Integer getNoOfUsers();

	Integer getTotalOrders();

	List<UserDetailsDto> getAllUsers();

}
