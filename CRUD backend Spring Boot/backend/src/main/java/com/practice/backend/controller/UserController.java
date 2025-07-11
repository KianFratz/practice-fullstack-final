package com.practice.backend.controller;

import com.practice.backend.model.Users;
import com.practice.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public Users newUser(@RequestBody Users newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    public List<Users> getUsers() {
        return userRepository.findAll();
    }
}
