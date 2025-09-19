package com.recipe.apps_receipe.service.impl;

import com.recipe.apps_receipe.dto.UserDto;
import com.recipe.apps_receipe.entity.User;
import com.recipe.apps_receipe.repository.UserRepository;
import com.recipe.apps_receipe.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository userRepository;

    @Override
    public boolean saveUser(UserDto userDto) {
        User user = convertUserDtoToUser(userDto);
        user.setCreatedAt(Instant.now());
        user.setUpdatedAt(Instant.now());
        user.setRole("user");
        userRepository.save(user);
        return true;

    }

    private User convertUserDtoToUser(UserDto userDto) {
        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        return user;
    }



}
