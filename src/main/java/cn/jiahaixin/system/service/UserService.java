package cn.jiahaixin.system.service;


import cn.jiahaixin.system.form.UserForm;
import cn.jiahaixin.system.model.User;

import java.util.List;

/**
 * Created by starfish on 2017/8/21.
 */
public interface UserService {

    User getUserInfo(String username);

    List<User> getAllUsers(UserForm form);
}
