package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
