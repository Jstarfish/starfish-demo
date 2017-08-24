package cn.jiahaixin.system.controller;

import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
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

    Logger log = Logger.getLogger(LoginController.class);

    @RequestMapping(method = RequestMethod.POST)
    public String doLogin(HttpServletRequest request,
                          @RequestParam("userName") String userName,
                          @RequestParam("password") String password){
       // password = encrypt(userName,password);
        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated()){
            UsernamePasswordToken token = new UsernamePasswordToken(userName,password);
            token.setRememberMe(true);
            try{

                System.out.println("1. " + token.hashCode());
                //可以login的话，说明认证通过
                currentUser.login(token);
                System.out.println("---");
                return "redirect:/index.do";
            }catch (UnknownAccountException uae) {
                log.error("-----用户不存在-----"+uae.getMessage());
            } catch (IncorrectCredentialsException ice) {
                log.error("-----密码不匹配-----"+ice.getMessage());
            }catch (AuthenticationException e){
                System.out.println("登录失败："+e.getMessage());
                log.error(e.getMessage());
                e.printStackTrace();
                token.clear();
            }
            return "error";

        }
        return null;
    }

    private String encrypt(String username,String password) {
        String hashAlgorithmName = "MD5";
        Object salt = ByteSource.Util.bytes(username);
        ;
        int hashIterations = 1024;

        Object result = new SimpleHash(hashAlgorithmName, password, salt, hashIterations);
       // System.out.println(result);
        return result.toString();
    }
}
