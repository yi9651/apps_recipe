package com.recipe.apps_receipe.controller;

import com.recipe.apps_receipe.dto.ContactDto;
import com.recipe.apps_receipe.dto.FoodDto;
import com.recipe.apps_receipe.service.IContactService;
import com.recipe.apps_receipe.service.IFoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/contact")
public class ContactController {

    private final IContactService contactService;

    @PostMapping
    public String saveContact(@RequestBody ContactDto contactDto) {
        boolean success = contactService.saveContact(contactDto);
        if(success){
            return "success";
        }else{
            return "error";
        }
    }
}
