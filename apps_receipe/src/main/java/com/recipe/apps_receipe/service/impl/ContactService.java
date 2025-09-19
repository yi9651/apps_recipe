package com.recipe.apps_receipe.service.impl;

import com.fasterxml.jackson.databind.util.BeanUtil;
import com.recipe.apps_receipe.dto.ContactDto;
import com.recipe.apps_receipe.entity.Contact;
import com.recipe.apps_receipe.repository.ContactRepository;
import com.recipe.apps_receipe.service.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class ContactService implements IContactService {

     private final ContactRepository contactRepository;

    @Override
    public boolean saveContact(ContactDto contactDto) {
        Contact contact = transformContactDto(contactDto);
        contact.setCreatedAt(Instant.now());
        contactRepository.save(contact);
        return true;
    }

    private Contact transformContactDto(ContactDto contactDto) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactDto, contact);
        return contact;
    }
}
