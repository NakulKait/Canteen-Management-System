package com.orderservice.dto;

import lombok.Data;

@Data
public class OrderItemRequest {
	
	private Long itemId;
	private int quantity;
	private double unitPrice;
	
	

}
