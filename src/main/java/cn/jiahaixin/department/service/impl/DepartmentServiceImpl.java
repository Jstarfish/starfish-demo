package cn.jiahaixin.department.service.impl;

import cn.jiahaixin.department.dao.DepartmentDao;
import cn.jiahaixin.department.model.Department;
import cn.jiahaixin.department.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by starfish on 2017/8/31.
 */
@Service
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    private DepartmentDao departmentDao;


    public List<Department> getDepartmentList() {
        return departmentDao.findAll();
    }
}
