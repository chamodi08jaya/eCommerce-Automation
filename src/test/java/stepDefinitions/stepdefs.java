package stepDefinitions;

import com.eCommerce.qa.base.TestBase;
import com.eCommerce.qa.util.TestUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class stepdefs extends TestBase {
    static Logger logger = Logger.getLogger(stepdefs.class);

    WebDriver driver =null;

    @Given("^browser is opened$")
    public void browser_is_open()  throws Throwable{
        System.out.println("browser is opened");
        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver","target\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
    }

    @When("^login page is opened$")
    public void login_page_is_open() throws Throwable{
        driver.navigate().to("http://automationpractice.com/index.php?controller=authentication&back=my-account");
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Navigate to login Page !!");
    }

    @When("^user adds email with \"([^\"]*)\" and password with \"([^\"]*)\"$")
    public void user_adds_email_with_and_password_with(String email, String password) throws Throwable {
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input")).sendKeys(email);
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/span/input")).sendKeys(password);
    }

    @And("^user clicks the login button$")
    public void user_clicks_the_login_button()  throws Throwable{
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span")).click();
    }

    @Then("^user navigates into MyAccount Page$")
    public void user_navigates_into_MyAccount_Page() throws Throwable{
        driver.findElement(By.xpath("//*[@id=\"center_column\"]/h1")).isDisplayed();
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Navigate to MyAccount Page !!");
    }

    @Then("^browser is closed$")
    public void browser_is_closed() throws Throwable {
        driver.quit();
    }

    @Then("^user cannot login to system with error message$")
    public void user_cannot_login_to_system_with_error_message() throws Throwable {
        String ConfirmationText=driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[1]")).getText();
        ConfirmationText.contains("There is 1 error\n" + "Authentication failed.");
    }

    @When("^user clicks \"([^\"]*)\" tab from top menu bar$")
    public void user_clicks_tab_from_top_menu_bar(String WOMEN) throws Throwable {
        driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[1]/a")).click();
    }

    @Then("^user clicks Add to cart button on selected dress$")
    public void user_clicks_Add_to_cart_button_on_selected_dress() throws Throwable {
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li[1]/div/div[2]"))).perform();
        driver.findElement(By.xpath("//a[@data-id-product='1' and @class='button ajax_add_to_cart_button btn btn-default']")).click();
    }

    @Then("^\"([^\"]*)\" message is displayed$")
    public void message_is_displayed(String message) throws Throwable {
        String ConfirmationText=driver.findElement(By.xpath("//*[@id=\"layer_cart\"]/div[1]/div[1]/h2")).getText();
        ConfirmationText.contains("Product successfully added to your shopping cart");
    }

    @When("^user clicks Proceed to checkout button$")
    public void user_clicks_Proceed_to_checkout_button() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"layer_cart\"]/div[1]/div[2]/div[4]/a/span")).click();
    }

    @Then("^user clicks Proceed to checkout button in summary page$")
    public void user_clicks_Proceed_to_checkout_button_in_summary_page() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"center_column\"]/p[2]/a[1]/span")).click();
    }

    @Then("^user clicks Proceed to checkout button in address page$")
    public void user_clicks_Proceed_to_checkout_button_in_address_page() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"center_column\"]/form/p/button/span")).click();
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Navigate to Address Page !!");
    }

    @Then("^user ticks terms and condition sentence$")
    public void user_ticks_terms_and_condition_sentence() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"cgv\"]")).click();
    }

    @Then("^user clicks Proceed to checkout button in shipping page$")
    public void user_clicks_Proceed_to_checkout_button_in_shipping_page() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"form\"]/p/button/span")).click();
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Navigate to Shipping Page !!");
    }

    @Then("^user navigates to payment page$")
    public void user_navigates_to_payment_page() throws Throwable {
        String ConfirmationText=driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/h1")).getText();
        ConfirmationText.contains("PLEASE CHOOSE YOUR PAYMENT METHOD");
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Navigate to Payment Page !!");
    }

    @Then("^user clicks Continue shopping button$")
    public void user_clicks_Continue_shopping_button() throws Throwable {
        driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/span")).click();
    }

    @Then("^user adds another item to the cart$")
    public void user_adds_another_item_to_the_cart() throws Throwable {
        Actions actions1 = new Actions(driver);
        actions1.moveToElement(driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li[2]/div/div[2]"))).perform();
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[2]/div[2]/a[1]")).click();
    }

    @Then("^multiple items are displayed in the summary table$")
    public void multiple_items_are_displayed_in_the_summary_table() throws Throwable {
        String product1=driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[2]/p")).getText();
        String product2=driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr[2]/td[2]/p")).getText();

        if(product1.contains("Faded Short Sleeve T-shirts")&& product2.contains("Blouse")){
            System.out.println("Multiple items added to the cart");
        }
        else {
            System.out.println("Only single item added to the cart");
        }
    }

    @When("^user select Pay by check option$")
    public void user_select_Pay_by_check_option() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"HOOK_PAYMENT\"]/div[2]/div/p")).click();
    }

    @Then("^user clicks I confirm my order button$")
    public void user_clicks_I_confirm_my_order_button() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"cart_navigation\"]/button/span")).click();
    }

    @Then("^confirmation message is displayed with \"([^\"]*)\"$")
    public void confirmation_message_is_displayed_with(String message) throws Throwable {
        String ConfirmationText3=driver.findElement(By.xpath("//div[@id='center_column']/p[@class='alert alert-success']")).getText();
        // Verify that Product is ordered
        if(ConfirmationText3.contains("Your order on My Store is complete.")) {
            System.out.println("Order Completed: Test Case Passed");
        }
        else {
            System.out.println("Order Not Successful: Test Case Failed");
        }
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Your order on My Store is complete message displayed !!");
    }

    @Then("^user clicks Back to orders button$")
    public void user_clicks_Back_to_orders_button() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"center_column\"]/p[2]/a")).click();
    }

    @Then("^user download the invoice as PDF$")
    public void user_download_the_invoice_as_PDF() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"order-list\"]/tbody/tr[1]/td[6]/a")).click();
        PropertyConfigurator.configure("src\\log4j.properties");
        logger.info("Invoice is downloaded !!");
    }

}
