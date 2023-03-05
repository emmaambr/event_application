package com.example.backend.entity;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;

@Entity
public class Event {

    public Event() {
    }

    public Event(String title, String description, LocalDateTime eventDate, int ageLimit, Double cost, Boolean active) {
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.ageLimit = ageLimit;
        this.cost = cost;
        this.active = active;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 

    @ManyToOne
    private User user;

    @NotBlank(message = "title cannot be blank")
    @Nonnull
    @Column(nullable = false)
    private String title;

    @NotBlank(message = "description cannot be blank")
    @Nonnull
    @Column(nullable = false)
    private String description;
    
    @NotBlank(message = "eventDate cannot be blank")
    @Nonnull
    @Column(nullable = false)
    private LocalDateTime eventDate; 

    private int ageLimit;
    private Double cost; 
    private Boolean active; 

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDateTime eventDate) {
        this.eventDate = eventDate;
    }

    public int getAgeLimit() {
        return ageLimit;
    }

    public void setAgeLimit(int ageLimit) {
        this.ageLimit = ageLimit;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

}
