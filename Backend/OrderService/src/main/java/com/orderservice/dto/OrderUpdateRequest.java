package com.orderservice.dto;

import java.util.List;

import lombok.Data;

@Data
public class OrderUpdateRequest {
    
	private Long id;
	private Long userId;
	private String tokenNo;
	private String status;
	private String paymentStatus;
	private double totalAmount;
	private List<OrderItemRequest> items;
	
}
