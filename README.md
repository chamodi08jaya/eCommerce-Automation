Validating the E-commerce application to add the product to cart

Application: http://automationpractice.com/index.php?

Requirement: The E-commerce application allows the customer to login with valid username and valid password. The customer once logged into the system successfully can be able to choose the multiple product. Add the product to the cart and validate the product is added successfully to the cart. Complete the payment process and receive the invoice

This repository included: 

1. Mind Map and develop test cases for given requirement

2. Hybrid Test Framework -- Page Object Model + Data Driven framework + TestNG & Maven Project Structure

3. Corresponding packages for -- Scripting

        a. Page Layer: Creating and storing the test object description using Page Factory – Framework
        
        b. Test Layer: Multiple test cases using TestNG annotations – Framework
        
        c. Test Base: Pre-requisite of initializing the drivers, properties, etc. – Framework
        
        d. Configuration files: to store environment variables in. properties file like, URL, Defaul username and passwords, browser instances etc. – Framework
        
        e. Test data files: Excels, My SQL DB, Property file
        
        f. Utilities: to store screenshots, generic functions, common utilities, emails etc.
        
        g. Reports using HTML, XML, Extent Reports etc.- Framework
        
4. Automation Scripts on Multiple times with capturing screen images of failure testcases by fetching the data from DB, excel, property file.

5. All the logs using log4j

6. Jenkins for Continuous integration, execute scripts via Jenkins

7. Selenium Integration with Cucumber and BDD Framework using Cucumber

        a. Feature File using Gherkin Language
        
        b. Step Definition file using cucumber Gherkin annotations
        
        c. Test Runner class Cucumber
        
8. Web services available for above identified test scenarios and test them usingPostman

9. Performance test script using JMETER for above identified test scenarios and measure response time
