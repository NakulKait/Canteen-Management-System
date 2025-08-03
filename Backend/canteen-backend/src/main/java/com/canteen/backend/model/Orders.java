package com.canteen.backend.model;



import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Document(collection="orders")
public class Orders {
	
	@Transient
	public static final String SEQUENCE_NAME = "orders_sequence";
	
	@Id
	private Long id;
	
	private double totalPrice;
	
	private String status;
	
	@DBRef(lazy=true)
	private User myUser;
	
	@DBRef(lazy=true)
	private Payment payment;
	
	
	private List<MenuItem> list=new ArrayList<>();
	
	
	public Orders(double totalPrice,String status)
	{
		this.totalPrice=totalPrice;
		this.status=status;
	}

}
