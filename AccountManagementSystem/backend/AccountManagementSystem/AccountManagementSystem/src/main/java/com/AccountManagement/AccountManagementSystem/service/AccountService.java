package com.AccountManagement.AccountManagementSystem.service;

import com.AccountManagement.AccountManagementSystem.entity.Account;
import com.AccountManagement.AccountManagementSystem.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;

    public Account AddAccount( Account account) {
        return accountRepository.save(account);
    }


    public List<Account> findAll() {
        return new ArrayList<>(accountRepository.findAll());
    }
}
