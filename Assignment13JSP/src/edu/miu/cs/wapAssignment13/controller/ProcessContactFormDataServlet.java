package edu.miu.cs.wapAssignment13.controller;

import edu.miu.cs.wapAssignment13.model.ContactMessage;
import edu.miu.cs.wapAssignment13.service.ContactMessageService;
import edu.miu.cs.wapAssignment13.service.ContactMessageServiceImpl.ContactMessageServiceImpl;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "ProcessContactFormDataServlet", urlPatterns = {"/process-contact-form"}, description = "")
public class ProcessContactFormDataServlet extends HttpServlet {

    private ContactMessageService contactMessageService=new ContactMessageServiceImpl();
    public ProcessContactFormDataServlet() {
        super();
    }

    @Override
    public void init() throws ServletException {
        super.init();
        // hitCount++;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //hitCount++;
        request.getRequestDispatcher("/WEB-INF/views/ContactForm.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // hitCount++;
        String missingFieldsMsg = "";
        String customerName = request.getParameter("customerName");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");
        
    
        // Check for missing fields data
        if(customerName.equals("")) {
            missingFieldsMsg += "<span style='color:red;font-size:1em'>Name is missing.</span><br/>";
        }
        if(gender == null) {
            missingFieldsMsg += "<span style='color:red;'>Gender is missing.</span><br/>";
        }
        System.out.println(category);
        if(category.equals("null")) {
            missingFieldsMsg += "<span style='color:red;'>Category is missing.</span><br/>";
        }
        if(message.equals("")) {
            missingFieldsMsg += "<span style='color:red;'>Message is missing.</span><br/>";
        }
        if(!missingFieldsMsg.equals("")) {
            request.setAttribute("errMsgs", missingFieldsMsg);
            // forward back to sender
            request.setAttribute("customerName", customerName);
            request.setAttribute("gender", gender);
            request.setAttribute("category", category);
            request.setAttribute("message", message);
            RequestDispatcher rd = request.getRequestDispatcher("/WEB-INF/views/ContactForm.jsp");
            rd.forward(request, response);
        } else {
            ContactMessage newContactMessage= contactMessageService.getInstanceOfContactMessage();

            newContactMessage.setCustomerName(request.getParameter("customerName"));
            newContactMessage.setGender(request.getParameter("gender"));
            newContactMessage.setCategory(request.getParameter("category"));
            newContactMessage.setMessage(request.getParameter("message"));
            contactMessageService.saveMessage(newContactMessage);

            String redirectUrl = "/Assignment13JSP/ThankYouForm?customerName="+customerName+"&gender="+gender+"&category="+category+"&message="+message;

            response.sendRedirect(redirectUrl);
            //String redirectUrl = "ThankYouForm.jsp";
           // response.sendRedirect("/Assignment13JSP/ThankYouForm");


        }
    }

}
