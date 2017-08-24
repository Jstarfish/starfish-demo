package cn.jiahaixin.system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by starfish on 2017/8/23.
 */
@Controller
@RequestMapping("index")
public class IndexController {

    @RequestMapping(params="method=logout")
    public String logout(HttpServletRequest request,HttpServletResponse response) {

        try {
            request.getSession().invalidate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "login";
    }

    @RequestMapping
    public String index(HttpServletRequest request, HttpServletResponse response) {
        return "index";

    }
}
