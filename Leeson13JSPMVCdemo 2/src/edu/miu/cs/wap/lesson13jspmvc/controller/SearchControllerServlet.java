package edu.miu.cs.wap.lesson13jspmvc.controller;

import edu.miu.cs.wap.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.wap.lesson13jspmvc.service.ContactMessageService;
import edu.miu.cs.wap.lesson13jspmvc.service.SearchContactMessageService;
import edu.miu.cs.wap.lesson13jspmvc.service.serviceImpl.ContactMessageServiceImpl;
import edu.miu.cs.wap.lesson13jspmvc.service.serviceImpl.SearchContactMessageServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@WebServlet(name = "SearchControllerServlet",urlPatterns = {"/search", "/searchResult"})
public class SearchControllerServlet extends HttpServlet {
private SearchContactMessageService searchContactMessageService= new SearchContactMessageServiceImpl();

    public SearchControllerServlet() {

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {




       doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String result =(String) request.getParameter("matchedString");
        List<ContactMessage> finalResult= searchContactMessageService.findString(result.trim());

        System.out.println("finalResult= "+finalResult);
        request.setAttribute("contactMessages", finalResult);
        request.setAttribute("numberOfContactMessages", finalResult.size());
        System.out.println("result= "+result);
      request.getRequestDispatcher("/WEB-INF/views/search.jsp").forward(request,response);
      //  response.sendRedirect("/WEB-INF/views/search.jsp");
    }
}
