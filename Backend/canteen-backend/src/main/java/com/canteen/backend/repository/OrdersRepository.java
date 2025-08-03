package com.canteen.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.canteen.backend.model.Orders;

public interface OrdersRepository extends MongoRepository<Orders, Long>{

}
