package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resource/features"},
        glue = {"stepDefinitions"},
        monochrome = true,
        plugin = {"html:target/cucumber-report-html", "json:target/cucumber-report-json.json" })

public class TestRunner {
}
