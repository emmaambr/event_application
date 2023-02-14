package com.example.backend.service;

import java.util.List;

import com.example.backend.entity.User;

public interface UserService {
    
    User getUser(Long id);
    User getUser(String username);
    List<User> getUsers();
    User newUser(User user);

}
