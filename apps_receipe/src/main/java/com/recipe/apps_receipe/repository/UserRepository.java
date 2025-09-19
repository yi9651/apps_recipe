package com.recipe.apps_receipe.repository;

import com.recipe.apps_receipe.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
