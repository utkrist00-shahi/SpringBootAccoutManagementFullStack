package com.AccountManagement.AccountManagementSystem.service;

import com.AccountManagement.AccountManagementSystem.entity.Account;
import com.AccountManagement.AccountManagementSystem.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;

    public Account addAccount( Account account) {
        return accountRepository.save(account);
    }


    public List<Account> findAllAccounts() {
        return new ArrayList<>(accountRepository.findAll());
    }

    public void deleteAccountById(Long id) {
        if (!accountRepository.existsById(id)) {
            System.out.println("Account with id: " + id + " does not exist");
        }
        accountRepository.deleteById(id);
    }

    public Optional<Account> updateAccountByID(Long id, Account account) {
        Optional<Account> existingAccount = accountRepository.findById(id);
        if (existingAccount.isPresent()) {
            Account updatedAccount = existingAccount.get();
            if (account.getEmail() != null) {
                updatedAccount.setEmail(account.getEmail());
            }
            if (account.getFirstName() != null) {
                updatedAccount.setFirstName(account.getFirstName());
            }
            if (account.getLastName() != null) {
                updatedAccount.setLastName(account.getLastName());
            }
            if (account.getPassword() != null) {
                updatedAccount.setPassword(account.getPassword());
            }
            Account savedAccount = accountRepository.save(updatedAccount);
            return Optional.of(savedAccount);
        }
        return Optional.empty();
    }
}
