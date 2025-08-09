package com.orderservice.service;

import java.util.List;

import com.orderservice.dto.ApiResponse;
import com.orderservice.dto.OrderRequest;
import com.orderservice.dto.OrderResponse;
import com.orderservice.dto.OrderUpdateRequest;



public interface IOrdersService {
	
	OrderResponse placeOrder(OrderRequest order);

	List<OrderResponse> getAllOrders();

	 List<OrderResponse> getAllOrdersById(Long id);

	ApiResponse deleteOrderById(Long id);

	ApiResponse updateOrderStatus(OrderUpdateRequest updateOrder);

}
