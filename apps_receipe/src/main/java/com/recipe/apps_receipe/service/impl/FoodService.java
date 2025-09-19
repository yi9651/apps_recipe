package com.recipe.apps_receipe.service.impl;

import com.recipe.apps_receipe.dto.FoodDto;
import com.recipe.apps_receipe.entity.Food;
import com.recipe.apps_receipe.repository.FoodRepository;
import com.recipe.apps_receipe.service.IFoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FoodService implements IFoodService {

    private final FoodRepository foodRepository;
    @Override
    public List<FoodDto> getFood() {
        return foodRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    private FoodDto toDto(Food food) {
        FoodDto dto = new FoodDto();
        BeanUtils.copyProperties(food, dto);
        return dto;
    }
}
