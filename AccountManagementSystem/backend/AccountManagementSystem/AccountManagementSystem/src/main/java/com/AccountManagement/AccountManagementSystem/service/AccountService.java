package com.AccountManagement.AccountManagementSystem.service;

import com.AccountManagement.AccountManagementSystem.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface AccountService extends JpaRepository<Account, Long> {
}
