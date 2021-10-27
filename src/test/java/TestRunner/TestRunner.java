package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/feature/",
        glue = {"src/test/java/stepDefinitions/stepdefs"},
        plugin = {"pretty", "html:target/cucumber-report-html", "json:target/cucumber.json" })

public class TestRunner {
}
