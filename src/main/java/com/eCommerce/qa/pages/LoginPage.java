package com.eCommerce.qa.pages;

import com.eCommerce.qa.base.TestBase;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.IOException;

public class LoginPage extends TestBase {

    @FindBy(xpath = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input")
    WebElement Email;

    @FindBy(xpath = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/span/input")
    WebElement Password;

    @FindBy(xpath = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span")
    WebElement loginButton;

    public LoginPage(String email, String password){
        PageFactory.initElements(driver,this);
    }

    public MyAccount login(String email, String password){
        Email.sendKeys(email);
        Password.sendKeys(password);
        loginButton.submit();

        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot, new File(System.getProperty("user.dir")+ "/Screenshots/loginpage.png"));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        String actualUrl="http://automationpractice.com/index.php?controller=authentication";
        String expectedUrl= driver.getCurrentUrl();
        Assert.assertEquals(actualUrl, expectedUrl);
        return new MyAccount();
    }
}
