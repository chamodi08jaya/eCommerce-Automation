package com.eCommerce.qa.testcases;

import com.eCommerce.qa.base.TestBase;
import com.eCommerce.qa.pages.LoginPage;
import com.eCommerce.qa.pages.MyAccount;
import com.eCommerce.qa.pages.Payment;
import com.eCommerce.qa.pages.Women;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Testcases extends TestBase {

    LoginPage loginPage;
    MyAccount myAccount;
    Women women;
    Payment payment;

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
        women = myAccount.itemType();
        payment = women.addtocart();
    }

    @AfterMethod
    public void tearDown (){
        driver.quit();
    }
}
