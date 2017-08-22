package cn.jiahaixin.shiro.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by starfish on 2017/8/21.
 */
@Controller
@RequestMapping("login")
public class LoginController {


    @RequestMapping(method = RequestMethod.POST)
    public String doLogin(HttpServletRequest request,
                          @RequestParam("userName") String userName,
                          @RequestParam("password") String password){

        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated()){
            UsernamePasswordToken token = new UsernamePasswordToken(userName,password);
            token.setRememberMe(true);
            try{
                System.out.println("1. " + token.hashCode());
                currentUser.login(token);
                System.out.println("---");
            }catch (AuthenticationException e){
                System.out.println("登录失败："+e.getMessage());
            }

        }
        return "redirect:/index.do";
    }

}
