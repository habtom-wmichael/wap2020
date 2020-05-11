package edu.miu.cs.wap.lesson13jspmvc.service;

import edu.miu.cs.wap.lesson13jspmvc.model.ContactMessage;

import java.util.List;
import java.util.Optional;

public interface SearchContactMessageService {

    public List<ContactMessage> findString(String str);

}
