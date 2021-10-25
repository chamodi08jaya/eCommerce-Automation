package com.eCommerce.qa.pages;

import com.eCommerce.qa.base.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Payment extends TestBase {
    @FindBy(xpath = "//*[@id=\"HOOK_PAYMENT\"]/div[2]/div/p")
    WebElement PayByCheck;

    @FindBy(xpath = "//*[@id=\"cart_navigation\"]/button/span")
    WebElement confirmOrder;

    @FindBy(xpath = "//*[@id=\"center_column\"]/p[2]/a")
    WebElement backToOrders;

    @FindBy(xpath = "//*[@id=\"order-list\"]/tbody/tr[1]/td[6]/a")
    WebElement invoice;

    public Payment(){
        PageFactory.initElements(driver,this);

        PayByCheck.click();
        confirmOrder.click();

        String ConfirmationText3=driver.findElement(By.xpath("//div[@id='center_column']/p[@class='alert alert-success']")).getText();
        // Verify that Product is ordered
        if(ConfirmationText3.contains("Your order on My Store is complete.")) {
            System.out.println("Order Completed: Test Case Passed");
        }
        else {
            System.out.println("Order Not Successful: Test Case Failed");
        }

        backToOrders.click();
        invoice.click();
        System.out.println("payment completed");
    }
}
