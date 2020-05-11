package edu.miu.cs.wapAssignment13.service;

import edu.miu.cs.wapAssignment13.model.ContactMessage;

public interface ContactMessageService {
    public void saveMessage(ContactMessage contactMessage);
    public ContactMessage getContactMessage();
    public  ContactMessage  getInstanceOfContactMessage();
}
