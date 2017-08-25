package cn.jiahaixin.system.service.impl;

import cn.jiahaixin.system.dao.UserDao;
import cn.jiahaixin.system.form.UserForm;
import cn.jiahaixin.system.service.UserService;
import cn.jiahaixin.system.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by starfish on 2017/8/21.
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public User getUserInfo(String username) {
        return userDao.getUserInfo(username);
    }

    public List<User> getAllUsers(UserForm form) {
        return userDao.getAllUsers(form);
    }
}
