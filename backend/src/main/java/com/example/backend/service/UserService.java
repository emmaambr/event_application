package com.example.backend.service;

import java.util.List;

import com.example.backend.entity.User;

public interface UserService {
    
    User getUser(Long id);
    List<User> getUsers();
    User newUser(User user);

}
