package edu.miu.cs.wapAssignment13.repository;

import edu.miu.cs.wapAssignment13.model.ContactMessage;

import java.util.ArrayList;
import java.util.List;

public class ContactMessageRepository {

    private List<ContactMessage> contactMessages = new ArrayList<>();

    public ContactMessageRepository() {
    }

    public List<ContactMessage> getContactMessages() {
        return contactMessages;
    }

    public void setContactMessages(List<ContactMessage> contactMessages) {
        this.contactMessages = contactMessages;
    }
    public void AddContactMessage(ContactMessage contactMessage){
        this.contactMessages.add(contactMessage);
    }
}
