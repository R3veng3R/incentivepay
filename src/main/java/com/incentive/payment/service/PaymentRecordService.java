package com.incentive.payment.service;

import com.incentive.payment.model.PaymentRecord;
import com.incentive.payment.repository.PaymentRecordRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;

@Service
public class PaymentRecordService {
    private final Logger log = LoggerFactory.getLogger(PaymentRecordService.class);

    private final PaymentRecordRepository paymentRecordRepository;

    public PaymentRecordService(final PaymentRecordRepository paymentRecordRepository) {
        this.paymentRecordRepository = paymentRecordRepository;
    }

    @Transactional
    public PaymentRecord saveOrUpdate(final PaymentRecord paymentRecord) {
        if (paymentRecord.getCreated() == null) {
            paymentRecord.setCreated(new Date());
        }

        final Optional<PaymentRecord> optionalRecord = paymentRecordRepository
                .findByNameAndLastName(paymentRecord.getName(), paymentRecord.getLastName());

        optionalRecord.ifPresent( record -> paymentRecord.setId( record.getId() ));

        return paymentRecordRepository.saveAndFlush(paymentRecord);
    }
}
