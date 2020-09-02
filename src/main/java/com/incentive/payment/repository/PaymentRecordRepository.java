package com.incentive.payment.repository;

import com.incentive.payment.model.PaymentRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface PaymentRecordRepository extends JpaRepository<PaymentRecord, Long> {
    Optional<PaymentRecord> findByNameAndLastName(final String name, final String lastName);
}
