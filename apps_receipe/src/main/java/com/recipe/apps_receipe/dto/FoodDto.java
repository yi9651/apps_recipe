package com.recipe.apps_receipe.dto;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "food")
public class FoodDto {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name = "food_name", nullable = false)
    private String food_name;

    @Column(name = "food_category")
    private String food_category;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "popularity")
    private Integer popularity;

    @Column(name = "price")
    private Float price;

    @Column(name = "food_description")
    private String food_description;

    @Column(name = "is_allergen")
    private boolean is_allergen;
}
