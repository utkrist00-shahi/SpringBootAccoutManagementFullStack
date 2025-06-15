package com.AccountManagement.AccountManagementSystem.controller;

import com.AccountManagement.AccountManagementSystem.entity.Account;
import com.AccountManagement.AccountManagementSystem.service.AccountService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @DeleteMapping("/account/delete/{id}")
    public ResponseEntity<?> deleteAccountById(@PathVariable long id){
        try{
            accountService.deleteAccountById(id);
            return new ResponseEntity<>("Account with id : " + id + " has been deleted", HttpStatus.OK);

        }catch(EntityNotFoundException e){
         return new ResponseEntity<>("Account with id : " + id + " does not exist", HttpStatus.NOT_FOUND);
        }

    }


}
