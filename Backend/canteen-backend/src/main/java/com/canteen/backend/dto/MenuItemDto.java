package com.canteen.backend.dto;

import lombok.Data;

@Data
public class MenuItemDto {
	private String name;
    private String description;
    private double price;
    private String category;       // "Veg", "Non-Veg", "Breakfast"
    private boolean isSpecial;
    private String imageUrl;
}
