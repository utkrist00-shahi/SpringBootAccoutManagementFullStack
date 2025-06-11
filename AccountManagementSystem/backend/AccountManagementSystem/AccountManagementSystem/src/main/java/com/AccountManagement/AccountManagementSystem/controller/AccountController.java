package com.AccountManagement.AccountManagementSystem.controller;

import com.AccountManagement.AccountManagementSystem.entity.Account;
import com.AccountManagement.AccountManagementSystem.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/account")
    public Account addAccount (@RequestBody Account account){

        return accountService.AddAccount(account);
    }

    @GetMapping("student/view")
    public List<Account> viewAllAccounts(){
        return accountService.findAll();
    }


}
