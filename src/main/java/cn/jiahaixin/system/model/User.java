package cn.jiahaixin.system.model;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * Created by starfish on 2017/8/21.
 */
@Setter
@Getter
public class User {

    private Integer userId;
    private String userName;
    private String password;
    private String phone;
    private String realName;
    private Date createTime;
    private Integer status;


}
