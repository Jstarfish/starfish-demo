package cn.jiahaixin.shiro.handlers;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by starfish on 2017/8/17.
 */

@Controller
@RequestMapping("/shiro")
public class ShiroHandler {

    @RequestMapping("/login")
    public String login(@RequestParam("username") String username,
                        @RequestParam("password") String password) {

        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated()){
            UsernamePasswordToken token = new UsernamePasswordToken(username,password);
            token.setRememberMe(true);
            try{
                System.out.println("1. " + token.hashCode());
                currentUser.login(token);
            }catch (AuthenticationException e){
                System.out.println("登录失败："+e.getMessage());
            }

        }
        return "redirect:/list.jsp";
    }
}
