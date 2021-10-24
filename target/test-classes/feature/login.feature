Feature: User login
@stest
  Scenario: User successfully login with valid credentials
    Given browser is open
    When login page is open
    When user adds email and password
    And user clicks the login button
    Then user navigates into MyAccount Page