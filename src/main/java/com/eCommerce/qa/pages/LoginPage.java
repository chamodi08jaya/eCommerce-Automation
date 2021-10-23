package com.eCommerce.qa.pages;

import com.eCommerce.qa.base.TestBase;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends TestBase {

    @FindBy(xpath = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input")
    WebElement Email;

    @FindBy(xpath = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/span/input")
    WebElement Password;

    @FindBy(xpath = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span")
    WebElement loginButton;

    public LoginPage(String email, String password){
        PageFactory.initElements(driver,this);

        Email.sendKeys(email);
        Password.sendKeys(password);
        loginButton.submit();

        String actualUrl="http://automationpractice.com/index.php?controller=authentication";
        String expectedUrl= driver.getCurrentUrl();
        Assert.assertEquals(actualUrl, expectedUrl);
    }

    public MyAccount login(String email, String password){
        Email.sendKeys(email);
        Password.sendKeys(password);
        loginButton.submit();
        return new MyAccount();
    }
}
