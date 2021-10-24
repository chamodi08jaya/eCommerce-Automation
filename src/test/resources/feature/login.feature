Feature: User login

  Scenario: User successfully login with valid credentials
    Given browser is open
    When login page is open
    When user adds email with "sachini@gmail.com" and password with "12345"
    And user clicks the login button
    Then user navigates into MyAccount Page
    Then browser is closed

  Scenario: User unsuccessfully login with invalid credentials
    Given browser is open
    When login page is open
    When user adds email with "nimal@gmail.com" and password with "abc%45"
    And user clicks the login button
    Then  user cannot login to system with error message
    Then browser is closed