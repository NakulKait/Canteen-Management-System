package com.canteen.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.canteen.backend.dto.MenuItemDto;
import com.canteen.backend.model.MenuItem;
import com.canteen.backend.repository.MenuItemRepository;

@Service
@Transactional

public class MenuItemServiceImpl implements MenuItemService{
	
	@Autowired
	private MenuItemRepository menuItemRepository;
	@Override
	public String addFoodItem(MenuItemDto dto) {
		MenuItem item = new MenuItem();
		item.setName(dto.getName());
		item.setDescription(dto.getDescription());
		item.setCategory(dto.getCategory());
		item.setPrice(dto.getPrice());
		item.setSpecial(dto.isSpecial());
		item.setAvailable(dto.isAvailable());
		item.setImageUrl(dto.getImageUrl());
		
		menuItemRepository.save(item);
		
		return "Food Item Added Successfully";
	}
	@Override
	public List<MenuItem> getMenuItems() {
		// TODO Auto-generated method stub
		
		return menuItemRepository.findAll();
	}

}
