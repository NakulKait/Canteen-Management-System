package com.orderservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.orderservice.model.Orders;



public interface OrderRepository extends MongoRepository<Orders, Long>{

	List<Orders> findByUserId(Long id);

}
