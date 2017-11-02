package cn.jiahaixin.jpa;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import javax.sql.DataSource;
import java.sql.SQLException;

/**
 * Created by starfish on 2017/8/31.
 */
public class SpringDataTest {

    private ApplicationContext ctx = null;
    //private PersonRepsotory personRepsotory = null;
    //private PersonService personService;

    {
        ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        //personRepsotory = ctx.getBean(PersonRepsotory.class);
        //personService = ctx.getBean(PersonService.class);
    }

    @Test
    public void testJpa(){

    }

    @Test
    public void testDataSource() throws SQLException {
        DataSource dataSource = ctx.getBean(DataSource.class);
        System.out.println(dataSource.getConnection());
    }
}
