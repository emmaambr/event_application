package com.example.backend.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;

@RestController
public class UserController {

    @Autowired 
    UserService userService;
    
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return new ResponseEntity<>(userService.getUser(id), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> newUser(@Valid @RequestBody User user) {
        userService.newUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}