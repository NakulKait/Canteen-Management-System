package com.canteen.backend.service;



import java.util.List;

import com.canteen.backend.dto.MenuItemDto;
import com.canteen.backend.model.MenuItem;

public interface MenuItemService {

	String addFoodItem(MenuItemDto dto);
	List<MenuItem> getMenuItems();
	String updateMenuItem(String id, MenuItemDto menuItemDto);
	String deleteMenuItem(String id);

	
}
