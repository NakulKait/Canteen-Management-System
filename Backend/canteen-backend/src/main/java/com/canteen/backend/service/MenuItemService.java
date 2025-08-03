package com.canteen.backend.service;

import java.util.List;

import com.canteen.backend.dto.ApiResponse;
import com.canteen.backend.dto.MenuItemDto;
import com.canteen.backend.model.MenuItem;

public interface MenuItemService {

	ApiResponse addFoodItem(MenuItemDto dto);
	List<MenuItem> getMenuItems();
	ApiResponse updateMenuItem(Long id, MenuItemDto menuItemDto);
	ApiResponse deleteMenuItem(Long id);
    MenuItem getMenuItemById(Long id);
    List<MenuItem> getItemsByCategory(String category);
    List<MenuItem> getAvailableMenuItems();

}
