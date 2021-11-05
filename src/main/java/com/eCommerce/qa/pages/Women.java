package com.eCommerce.qa.pages;

import com.eCommerce.qa.base.TestBase;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.IOException;

public class Women extends TestBase {
    static Logger logger = Logger.getLogger(Women.class);

    @FindBy(xpath = "//*[@id=\"center_column\"]/ul/li[1]/div/div[2]")
    WebElement dress1;

    @FindBy(xpath = "//a[@data-id-product='1' and @class='button ajax_add_to_cart_button btn btn-default']")
    WebElement addtocart;

    @FindBy(xpath = "/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/span")
    WebElement continueShopping;

    @FindBy(xpath = "//*[@id=\"center_column\"]/ul/li[2]/div/div[2]")
    WebElement dress2;

    @FindBy(xpath = "//a[@data-id-product='2' and @class='button ajax_add_to_cart_button btn btn-default']")
    WebElement addtocart2;

    @FindBy(xpath = "//*[@id=\"layer_cart\"]/div[1]/div[2]/div[4]/a/span")
    WebElement proceedToCheckout1;

    @FindBy(xpath = "//*[@id=\"center_column\"]/p[2]/a[1]/span")
    WebElement ProceedToCheckout2;

    @FindBy(xpath = "//*[@id=\"center_column\"]/form/p/button/span")
    WebElement ProceedToCheckout3;

    @FindBy(xpath = "//*[@id=\"cgv\"]")
    WebElement agree;

    @FindBy(xpath = "//*[@id=\"form\"]/p/button/span")
    WebElement ProceedToCheckout4;

    public Women(){
        PageFactory.initElements(driver,this);
    }

    public Payment addtocart(){
        Actions actions = new Actions(driver);
        actions.moveToElement(dress1).perform();
        addtocart.click();
        String ConfirmationText=driver.findElement(By.xpath("//*[@id=\"layer_cart\"]/div[1]/div[1]/h2")).getText();
        ConfirmationText.contains("Product successfully added to your shopping cart");
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Product successfully added to your shopping cart");

        continueShopping.click();

        Actions actions1 = new Actions(driver);
        actions1.moveToElement(dress2).perform();
        addtocart2.click();
        String ConfirmationText1=driver.findElement(By.xpath("//*[@id=\"layer_cart\"]/div[1]/div[1]/h2")).getText();
        ConfirmationText1.contains("Product successfully added to your shopping cart");

        String ConfirmationText2=driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/h2/span[1]")).getText();
        ConfirmationText2.contains("There are 2 items in your cart.");
        logger.info("There are 2 items in your cart.");

        proceedToCheckout1.click();
        Assert.assertEquals("SHOPPING-CART SUMMARY", "SHOPPING-CART SUMMARY");

        String product1=driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[2]/p")).getText();
        String product2=driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr[2]/td[2]/p")).getText();

        if(product1.contains("Faded Short Sleeve T-shirts")&& product2.contains("Blouse")){
            System.out.println("Multiple items are added to the cart");
        }
        else {
            System.out.println("Only single is item added to the cart");
        }

        File screenshot1 = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot1, new File(System.getProperty("user.dir")+ "/Screenshots/summary.png"));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        ProceedToCheckout2.click();
        Assert.assertEquals("Sign in", "Sign in");

        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input")).sendKeys("sachini@gmail.com");
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/span/input")).sendKeys("12345");
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span")).click();

        Assert.assertEquals("ADDRESSES", "ADDRESSES");

        File screenshot2 = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot2, new File(System.getProperty("user.dir")+ "/Screenshots/address.png"));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        ProceedToCheckout3.click();
        Assert.assertEquals("SHIPPING", "SHIPPING");

        agree.click();

        File screenshot3 = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot3, new File(System.getProperty("user.dir")+ "/Screenshots/shipping.png"));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        ProceedToCheckout4.click();
        Assert.assertEquals("PLEASE CHOOSE YOUR PAYMENT METHOD", "PLEASE CHOOSE YOUR PAYMENT METHOD");

        File screenshot4 = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot4, new File(System.getProperty("user.dir")+ "/Screenshots/payment.png"));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        logger.info("Order Confirmed!!");

        System.out.println("Order Confirmed");
        return new Payment();
    }
}
