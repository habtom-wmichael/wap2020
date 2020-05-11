package edu.miu.cs.wap.lesson13jspmvc.controller;

import edu.miu.cs.wap.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.wap.lesson13jspmvc.service.ContactMessageService;
import edu.miu.cs.wap.lesson13jspmvc.service.serviceImpl.ContactMessageServiceImpl;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "ContactMessageControllerServlet",  urlPatterns = { "/contact-messages","/messages" })
public class ContactMessageControllerServlet extends HttpServlet {

private ContactMessageService contactMessageService= new ContactMessageServiceImpl();

    public ContactMessageControllerServlet() {

    }
@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   doGet(request,response);
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        List<ContactMessage> sortedContactMessages = contactMessageService.getContactMessages();
        request.setAttribute("contactMessages", sortedContactMessages);
        request.getRequestDispatcher("/WEB-INF/views/contact-messages.jsp").forward(request, response);
    }
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init();
    }
}
