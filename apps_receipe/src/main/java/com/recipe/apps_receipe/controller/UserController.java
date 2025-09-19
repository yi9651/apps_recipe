package com.recipe.apps_receipe.controller;

import com.recipe.apps_receipe.dto.UserDto;
import com.recipe.apps_receipe.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final IUserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserDto userDto) {
        boolean result = userService.saveUser(userDto);
        if (result) {
            return "User registered successfully";
        }
        return "User not registered";

    }
}
