package com.canteen.backend.service;

import com.canteen.backend.dto.PaymentVerificationDto;

public interface PaymentService {
	boolean verifyPayment(PaymentVerificationDto dto) throws Exception;
}
