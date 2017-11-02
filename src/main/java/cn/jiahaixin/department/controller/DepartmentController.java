package cn.jiahaixin.department.controller;

import cn.jiahaixin.department.model.Department;
import cn.jiahaixin.department.service.DepartmentService;
import cn.jiahaixin.system.controller.UserController;
import cn.jiahaixin.system.form.UserForm;
import cn.jiahaixin.system.model.User;
import cn.jiahaixin.system.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by starfish on 2017/8/31.
 */
@Controller
@RequestMapping("department")
public class DepartmentController {

    Logger log = Logger.getLogger(DepartmentController.class);

    @Autowired
    private DepartmentService departmentService;

    @RequestMapping(params = "method=getDepartmentList")
    public String getUserList(){
        return "system/department/departmentList";
    }

    @ResponseBody
    @RequestMapping(params = "method=listDepartment")
    public Object listUsers(Department form) {
        List<Department> departments = departmentService.getDepartmentList();
        return departments;
    }
}
