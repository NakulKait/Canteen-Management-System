package com.orderservice.dto;

import lombok.Data;

@Data
public class OrderItemResponse {
	private Long itemId;
    private int productQuantity;
    private double unitPrice;

}
