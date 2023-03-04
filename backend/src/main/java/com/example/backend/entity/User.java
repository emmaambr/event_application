package com.example.backend.entity;

import java.util.Set;

import javax.validation.constraints.NotBlank;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    public User() {
    }

    public User(String username, String password, String email, String name) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "password cannot be blank")
    @Nonnull
    @Column(nullable = false, unique = true)
    private String username;

    @NotBlank(message = "password cannot be blank")
    @Nonnull
    @Column(nullable = false)
    private String password;

    @NotBlank(message = "email cannot be blank")
    @Nonnull
    @Column(nullable = false, unique = true)
    private String email; 

    @NotBlank(message = "name cannot be blank")
    @Nonnull
    @Column(nullable = false)
    private String name; 

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private Set<Event> event;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
 
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
