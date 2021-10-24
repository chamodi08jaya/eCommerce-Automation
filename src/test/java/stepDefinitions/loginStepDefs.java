package stepDefinitions;

import com.eCommerce.qa.util.TestUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class loginStepDefs {
    WebDriver driver =null;

    @Given("^browser is open$")
    public void browser_is_open()  throws Throwable{
        System.out.println("browser is opened");
        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver","target\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
    }

    @When("^login page is open$")
    public void login_page_is_open() throws Throwable{
        driver.navigate().to("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    @When("^user adds email and password$")
    public void user_adds_email_with_and_password_with() {
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input")).sendKeys("sachini@gmail.com");
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/span/input")).sendKeys("12345");
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

}
