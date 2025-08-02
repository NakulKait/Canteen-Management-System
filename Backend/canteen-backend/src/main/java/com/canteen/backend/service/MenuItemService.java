package com.canteen.backend.service;

import java.util.List;

import com.canteen.backend.dto.ApiResponse;
import com.canteen.backend.dto.MenuItemDto;
import com.canteen.backend.model.MenuItem;

public interface MenuItemService {

    ApiResponse addFoodItem(MenuItemDto dto);
    List<MenuItem> getMenuItems();
    ApiResponse updateMenuItem(String id, MenuItemDto menuItemDto);
    ApiResponse deleteMenuItem(String id);
    MenuItem getMenuItemById(String id);
    List<MenuItem> getItemsByCategory(String category);
    List<MenuItem> getAvailableMenuItems();
}
