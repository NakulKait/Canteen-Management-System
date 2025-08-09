package com.orderservice.dto;

import java.util.List;



import lombok.Data;

@Data
public class OrderRequest {
	
	private Long userId;
	private String status;
	private String paymentStatus;
	private double totalAmount;
	private List<OrderItemRequest> items;

}
