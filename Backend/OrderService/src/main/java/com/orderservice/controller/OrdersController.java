package com.orderservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orderservice.dto.OrderRequest;
import com.orderservice.dto.OrderUpdateRequest;
import com.orderservice.service.IOrdersService;



@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrdersController {
	
	@Autowired
	private IOrdersService orderService;
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addOrder(@RequestBody OrderRequest order)
	{
		return ResponseEntity.ok(orderService.placeOrder(order));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllOrders()
	{
		return ResponseEntity.ok(orderService.getAllOrders());
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> getAllOrdersByUserId(@PathVariable Long id)
	{
		return ResponseEntity.ok(orderService.getAllOrdersById(id));
	}
	
	@DeleteMapping("{id}")
	
	public ResponseEntity<?> deleteOrderById(@PathVariable Long id)
	{
		
		return ResponseEntity.ok(orderService.deleteOrderById(id));
	}
	
	
	@PutMapping
	
	public ResponseEntity<?> updateOrderStatus(@RequestBody OrderUpdateRequest updateOrder)
	{
		return ResponseEntity.ok(orderService.updateOrderStatus(updateOrder));
	}
	
	

}
