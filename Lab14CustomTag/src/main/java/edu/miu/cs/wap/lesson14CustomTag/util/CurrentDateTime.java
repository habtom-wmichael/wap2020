package edu.miu.cs.wap.lesson14CustomTag.util;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CurrentDateTime extends SimpleTagSupport {
    String color;
    String size;
    LocalDateTime dtNow= LocalDateTime.now();

    public CurrentDateTime() {
    }

    @Override
    public void doTag() throws JspException, IOException {
        JspWriter jspWriter = getJspContext().getOut();
        String str = dtNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"));
        if(color!=null){
            jspWriter.write(String.format("<span style='color:%s' font-size='%s'>%s</span>",color,size,str));
        }else if(size!=null){
            jspWriter.write(String.format("<span font-size='%s'>%s</span>",size,str));

        }else{
            jspWriter.write(String.format("<span>%s</span>",str));
        }
    }
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public LocalDateTime getDtNow() {
        return dtNow;
    }

    public void setDtNow(LocalDateTime dtNow) {
        this.dtNow = dtNow;
    }
}
