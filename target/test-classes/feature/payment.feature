Feature: Payment process

  Background: User logs to the system
    Given browser is opened
    When login page is opened
    When user adds email with "sachini@gmail.com" and password with "12345"
    And user clicks the login button
    Then user navigates into MyAccount Page

  Scenario: User pays for a single item through check
    When user clicks "WOMEN" tab from top menu bar
    Then user clicks Add to cart button on selected dress
    Then Product successfully added to your shopping cart message is displayed
    When user clicks Proceed to checkout button
    Then user clicks Proceed to checkout button in summary page
    Then user clicks Proceed to checkout button in address page
    Then user ticks terms and condition sentence
    Then user clicks Proceed to checkout button in shipping page
    Then user navigates to payment page
    When user select Pay by check option
    Then user clicks I confirm my order button
    Then confirmation message is displayed with "Your order on My Store is complete."
    Then user clicks Back to orders button
    Then user download the invoice as PDF
    Then browser is closed

  Scenario: User pays for multiple items through check
    When user clicks "WOMEN" tab from top menu bar
    Then user clicks Add to cart button on selected dress
    Then user clicks Continue shopping button
    Then user adds another item to the cart
    Then Product successfully added to your shopping cart message is displayed
    When user clicks Proceed to checkout button
    Then multiple items are displayed in the summary table
    Then user clicks Proceed to checkout button in summary page
    Then user clicks Proceed to checkout button in address page
    Then user ticks terms and condition sentence
    Then user clicks Proceed to checkout button in shipping page
    Then user navigates to payment page
    When user select Pay by check option
    Then user clicks I confirm my order button
    Then confirmation message is displayed with "Your order on My Store is complete."
    Then user clicks Back to orders button
    Then user download the invoice as PDF
    Then browser is closed