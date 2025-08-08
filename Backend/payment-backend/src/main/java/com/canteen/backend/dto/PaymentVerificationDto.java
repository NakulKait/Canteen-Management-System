package com.canteen.backend.dto;

import lombok.Data;

@Data
public class PaymentVerificationDto {
	private String orderId;
    private String paymentId;
    private String signature;
}
