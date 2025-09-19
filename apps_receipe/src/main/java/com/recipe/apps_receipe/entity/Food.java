package com.recipe.apps_receipe.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name="food")
public class Food {
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

    @Column(name = "created_at", nullable = false)
    private Instant  created_at;

    @Column(name = "created_by", nullable = false)
    private String created_by;

    @Column(name = "updated_at")
    private Instant updated_at;

    @Column(name = "updated_by")
    private String updated_by;

}
