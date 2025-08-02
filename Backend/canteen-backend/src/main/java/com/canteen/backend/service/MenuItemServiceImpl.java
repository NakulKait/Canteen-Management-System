package com.canteen.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.canteen.backend.dto.ApiResponse;
import com.canteen.backend.dto.MenuItemDto;
import com.canteen.backend.model.MenuItem;
import com.canteen.backend.repository.MenuItemRepository;

@Service
@Transactional

public class MenuItemServiceImpl implements MenuItemService{
	
	@Autowired
	private MenuItemRepository menuItemRepository;
	@Override
	public ApiResponse addFoodItem(MenuItemDto dto) {
		MenuItem item = new MenuItem();
		item.setName(dto.getName());
		item.setDescription(dto.getDescription());
		item.setCategory(dto.getCategory());
		item.setPrice(dto.getPrice());
		item.setSpecial(dto.isSpecial());
		item.setAvailable(dto.isAvailable());
		item.setImageUrl(dto.getImageUrl());
		item.setItemType(dto.getItemType());
		
		menuItemRepository.save(item);
		
		return new ApiResponse("Food Item Added Successfully");
	}
	@Override
	public List<MenuItem> getMenuItems() {
		// TODO Auto-generated method stub
		
		return menuItemRepository.findAll();
	}
	
	@Override
	public ApiResponse updateMenuItem(String id, MenuItemDto dto) {
	    Optional<MenuItem> optional = menuItemRepository.findById(id);
	    if (!optional.isPresent()) {
	        return new ApiResponse("Item not found!");
	    }

	    MenuItem item = optional.get();
	    item.setName(dto.getName());
	    item.setDescription(dto.getDescription());
	    item.setPrice(dto.getPrice());
	    item.setCategory(dto.getCategory());
	    item.setAvailable(dto.isAvailable());
	    item.setSpecial(dto.isSpecial());
	    item.setImageUrl(dto.getImageUrl());

	    menuItemRepository.save(item);
	    return new ApiResponse("Item updated successfully!");
	}

	@Override
	public ApiResponse deleteMenuItem(String id) {
	    if (!menuItemRepository.existsById(id)) {
	        return new ApiResponse("Item not found!");
	    }
	    menuItemRepository.deleteById(id);
	    return new ApiResponse("Item deleted successfully!");
	}

}
