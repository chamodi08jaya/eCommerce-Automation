package com.eCommerce.qa.testcases;

import com.eCommerce.qa.base.TestBase;
import com.eCommerce.qa.pages.LoginPage;
import com.eCommerce.qa.pages.MyAccount;
import com.eCommerce.qa.pages.Payment;
import com.eCommerce.qa.pages.Women;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Testcases extends TestBase {

    LoginPage loginPage;
    MyAccount myAccount;
    Women women;
    Payment payment;

    static Logger logger = Logger.getLogger(Testcases.class);

    public Testcases (){
        super();
    }

    @BeforeMethod
    public void setup(){
        initialization();
        loginPage = new LoginPage(properties.getProperty("Email"), properties.getProperty("Password"));
    }

    @Test
    public void LoginTest (){
        myAccount = loginPage.login(properties.getProperty("Email"), properties.getProperty("Password"));
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Navigate to MyAccount Page !!");
        logger.info("Select Women as clothing type !!");

        women = myAccount.itemType();
        logger.info(" Add to cart!!");
        logger.info(" Choosing Payment Method!!");

        payment = women.addtocart();
        logger.info(" Confirm Order!!");
        logger.info(" Invoice is downloaded as PDF!!");
    }

    @AfterMethod
    public void tearDown (){
        driver.quit();
    }
}
