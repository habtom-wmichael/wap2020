package edu.miu.cs.wap.lesson13jspmvc.service.serviceImpl;

import edu.miu.cs.wap.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.wap.lesson13jspmvc.repository.ContactMessageRepository;
import edu.miu.cs.wap.lesson13jspmvc.service.ContactMessageService;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ContactMessageServiceImpl  implements ContactMessageService {
    private ContactMessageRepository contactMessageRepository= new ContactMessageRepository();

    public ContactMessageServiceImpl() {
        this.contactMessageRepository = contactMessageRepository;
    }

    @Override
    public List<ContactMessage> getContactMessages() {
        return contactMessageRepository.getContactMessages().stream()
                .sorted(Comparator.comparing(ContactMessage::getCustomerName))
                .collect(Collectors.toList());
    }
}
