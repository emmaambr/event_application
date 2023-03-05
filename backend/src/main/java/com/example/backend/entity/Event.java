package com.example.backend.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.validation.constraints.NotBlank;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;

@Entity
public class Event {

    public Event() {
    }

    public Event(String title, String description, LocalDate date, LocalTime time, int ageLimit, Double cost, Boolean active) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
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
    
    @NotBlank(message = "date cannot be blank")
    @Nonnull
    @Column(nullable = false)
    private LocalDate date; 

    @NotBlank(message = "time cannot be blank")
    @Nonnull
    @Column(nullable = false)
    private LocalTime time; 

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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
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
