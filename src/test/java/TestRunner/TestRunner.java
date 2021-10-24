package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        features = "src\test\resources\feature",
        glue = {"stepDefinitions"},
        //dryRun = false,
        //monochrome = true,
        //plugin = {"pretty", "html:target/cucumber-report",
                //"json:target/cucumber.json"},
        format = {"pretty", "html:target/Destination/index.html"}
        )

public class TestRunner {
}
