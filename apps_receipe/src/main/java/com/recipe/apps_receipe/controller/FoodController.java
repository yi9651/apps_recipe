package com.recipe.apps_receipe.controller;

import com.recipe.apps_receipe.dto.FoodDto;
import com.recipe.apps_receipe.entity.Food;
import com.recipe.apps_receipe.service.IFoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/food")
public class FoodController {

    private final IFoodService foodService;

    @GetMapping
    public List<FoodDto> getFood() {
        return foodService.getFood();
    }
}
