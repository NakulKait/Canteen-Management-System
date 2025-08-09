package com.orderservice.dto;

import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrderResponse {
    private Long id;
    private Long userId;
    private String tokenNo;
    private String status;
    private String paymentStatus;
    private LocalDateTime createdOn;
    private double totalAmount;
    private List<OrderItemResponse> items;
}
