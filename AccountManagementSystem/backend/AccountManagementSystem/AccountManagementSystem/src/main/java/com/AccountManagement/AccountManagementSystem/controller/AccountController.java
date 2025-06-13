package com.AccountManagement.AccountManagementSystem.controller;

import com.AccountManagement.AccountManagementSystem.entity.Account;
import com.AccountManagement.AccountManagementSystem.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("api")
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/account/postAccount")
    public Account addAccount (@RequestBody Account account){

        return accountService.addAccount(account);
    }

    @GetMapping("/account/view")
    public List<Account> viewAllAccounts(){
        return accountService.findAllAccounts();
    }


}
