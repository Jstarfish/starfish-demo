package cn.jiahaixin.department.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by starfish on 2017/8/31.
 */

@Table(name = "starfish_department")
@Entity
public class Department {

    @Id
    @GeneratedValue
    @Column(name = "departmentId")
    private Long departmentId;
    private String departmentName;
    private String common;



    public Long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getCommon() {
        return common;
    }

    public void setCommon(String common) {
        this.common = common;
    }
}
