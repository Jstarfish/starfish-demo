package cn.jiahaixin.system.dao;

import cn.jiahaixin.system.form.UserForm;
import cn.jiahaixin.system.model.User;

import java.util.List;

/**
 * Created by starfish on 2017/8/22.
 */
public interface UserDao {


    User getUserInfo(String username);

    List<User> getAllUsers(UserForm form);
}
