package com.example.demo.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Id;

@RestController
@CrossOrigin(" http://localhost:5173/")
@RequestMapping("api/v1/user")
public class User {
    @Id
    public int id;
    public String name;
    public String password;
}
