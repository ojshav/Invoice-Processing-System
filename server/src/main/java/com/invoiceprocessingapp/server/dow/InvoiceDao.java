package com.invoiceprocessingapp.server.dow;

import com.invoiceprocessingapp.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice ,Long> {

}
