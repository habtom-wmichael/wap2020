package edu.miu.cs.wapAssignment13.controller;

import edu.miu.cs.wapAssignment13.model.ContactMessage;
import edu.miu.cs.wapAssignment13.service.ContactMessageService;
import edu.miu.cs.wapAssignment13.service.ContactMessageServiceImpl.ContactMessageServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "ThankYouController", urlPatterns = {"/ThankYouForm"})
public class ThankYouController extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        doGet(request,response);

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        request.getRequestDispatcher("WEB-INF/views/ThankYouForm.jsp").forward(request,response);
    }
}
