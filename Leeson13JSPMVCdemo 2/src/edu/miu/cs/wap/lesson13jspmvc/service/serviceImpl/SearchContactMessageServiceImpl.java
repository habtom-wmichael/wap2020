package edu.miu.cs.wap.lesson13jspmvc.service.serviceImpl;

import edu.miu.cs.wap.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.wap.lesson13jspmvc.repository.ContactMessageRepository;
import edu.miu.cs.wap.lesson13jspmvc.service.SearchContactMessageService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class SearchContactMessageServiceImpl implements SearchContactMessageService {
    private ContactMessageRepository contactMessageRepository= new ContactMessageRepository();

    public SearchContactMessageServiceImpl() {
        this.contactMessageRepository = contactMessageRepository;
    }


    @Override
    public List<ContactMessage> findString(String str) {
        //return Optional.empty();
        List<ContactMessage> result = new ArrayList<>();
        List<ContactMessage> contactMessages = contactMessageRepository.getContactMessages();
        for (ContactMessage contactMessage : contactMessages) {
            if (str.equalsIgnoreCase(contactMessage.getCustomerName())) {
                result.add(contactMessage);
            } else if (str.equalsIgnoreCase(contactMessage.getCategory())) {
                result.add(contactMessage);
            } else if (str.equalsIgnoreCase(contactMessage.getGender())) {
                result.add(contactMessage);
            } else if (str.equalsIgnoreCase(contactMessage.getMessage())) {
                result.add(contactMessage);
            }

        }

        return result;
    }


}
