package com.recipe.apps_receipe.service;

import com.recipe.apps_receipe.dto.FoodDto;
import com.recipe.apps_receipe.entity.Food;


import java.util.List;


public interface IFoodService {
    List<FoodDto> getFood();
}
