package edu.miu.cs.wapAssignment13.service.ContactMessageServiceImpl;

import edu.miu.cs.wapAssignment13.model.ContactMessage;
import edu.miu.cs.wapAssignment13.repository.ContactMessageRepository;
import edu.miu.cs.wapAssignment13.service.ContactMessageService;

import java.util.ArrayList;
import java.util.List;

public class ContactMessageServiceImpl implements ContactMessageService {
 private ContactMessageRepository contactMessageRepository = new ContactMessageRepository();
    @Override
    public void saveMessage(ContactMessage contactMessage) {

        contactMessageRepository.AddContactMessage(contactMessage);
    }

    @Override
    public ContactMessage getContactMessage() {
        return contactMessageRepository.getContactMessages().get(0);
    }

    @Override
    public ContactMessage getInstanceOfContactMessage() {
        return new ContactMessage();
    }
}
