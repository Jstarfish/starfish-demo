package cn.jiahaixin.system.dao;

import cn.jiahaixin.system.model.User;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

/**
 * Created by starfish on 2017/8/22.
 */
public interface UserDao {

    User getUserInfo(String username);

}
