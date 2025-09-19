package com.recipe.apps_receipe.service;

import com.recipe.apps_receipe.dto.UserDto;


public interface IUserService {
    boolean saveUser(UserDto userDto);
}
