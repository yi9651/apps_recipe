package com.recipe.apps_receipe.repository;

import com.recipe.apps_receipe.entity.Contact;
import com.recipe.apps_receipe.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
