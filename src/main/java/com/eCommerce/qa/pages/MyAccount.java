package com.eCommerce.qa.pages;

import com.eCommerce.qa.base.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccount extends TestBase {
    @FindBy(xpath = "/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[1]/a")
    WebElement WOMEN;

    public MyAccount(){
        PageFactory.initElements(driver,this);
    }

    public Women itemType(){
        WOMEN.click();
        return new Women();
    }
}
