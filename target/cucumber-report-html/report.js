$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("item.feature");
formatter.feature({
  "line": 1,
  "name": "User makes an order",
  "description": "",
  "id": "user-makes-an-order",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User logs to the system",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds email with \"sachini@gmail.com\" and password with \"12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigates into MyAccount Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.browser_is_open()"
});
formatter.result({
  "duration": 4701274400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 8429210600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachini@gmail.com",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 60
    }
  ],
  "location": "stepdefs.user_adds_email_with_and_password_with(String,String)"
});
formatter.result({
  "duration": 196510600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2664656000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 74979000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User adds a item to the cart and proceed to checkout",
  "description": "",
  "id": "user-makes-an-order;user-adds-a-item-to-the-cart-and-proceed-to-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user clicks \"WOMEN\" tab from top menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks Add to cart button on selected dress",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "\"Product successfully added to your shopping cart\" message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks Proceed to checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks Proceed to checkout button in summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks Proceed to checkout button in address page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user ticks terms and condition sentence",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks Proceed to checkout button in shipping page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user navigates to payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 13
    }
  ],
  "location": "stepdefs.user_clicks_tab_from_top_menu_bar(String)"
});
formatter.result({
  "duration": 4270710600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 317504000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 1
    }
  ],
  "location": "stepdefs.message_is_displayed(String)"
});
formatter.result({
  "duration": 41771600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 5490237500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 2243665400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 2281443000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 74992900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 2817211200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 37790800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 820962200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User logs to the system",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds email with \"sachini@gmail.com\" and password with \"12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigates into MyAccount Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.browser_is_open()"
});
formatter.result({
  "duration": 1789829400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 8624806800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachini@gmail.com",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 60
    }
  ],
  "location": "stepdefs.user_adds_email_with_and_password_with(String,String)"
});
formatter.result({
  "duration": 209336300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2839747100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 64484200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User adds multiple items to the cart and proceed to check",
  "description": "",
  "id": "user-makes-an-order;user-adds-multiple-items-to-the-cart-and-proceed-to-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user clicks \"WOMEN\" tab from top menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user clicks Add to cart button on selected dress",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks Continue shopping button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user adds another item to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "\"Product successfully added to your shopping cart\" message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks Proceed to checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "multiple items are displayed in the summary table",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks Proceed to checkout button in summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks Proceed to checkout button in address page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user ticks terms and condition sentence",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user clicks Proceed to checkout button in shipping page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user navigates to payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 13
    }
  ],
  "location": "stepdefs.user_clicks_tab_from_top_menu_bar(String)"
});
formatter.result({
  "duration": 5708301100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 261706400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Continue_shopping_button()"
});
formatter.result({
  "duration": 1262084000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_adds_another_item_to_the_cart()"
});
formatter.result({
  "duration": 324655700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 1
    }
  ],
  "location": "stepdefs.message_is_displayed(String)"
});
formatter.result({
  "duration": 35253900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 5222989000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.multiple_items_are_displayed_in_the_summary_table()"
});
formatter.result({
  "duration": 69722000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 3070674700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 3852197700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 78309000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 2941852700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 59544700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 747227000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "User login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User successfully login with valid credentials",
  "description": "",
  "id": "user-login;user-successfully-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds email with \"sachini@gmail.com\" and password with \"12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigates into MyAccount Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.browser_is_open()"
});
formatter.result({
  "duration": 2804727600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 7840046100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachini@gmail.com",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 60
    }
  ],
  "location": "stepdefs.user_adds_email_with_and_password_with(String,String)"
});
formatter.result({
  "duration": 187333200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2458951900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 41669200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 821609800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User unsuccessfully login with invalid credentials",
  "description": "",
  "id": "user-login;user-unsuccessfully-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user adds email with \"nimal@gmail.com\" and password with \"abc%45\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user cannot login to system with error message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.browser_is_open()"
});
formatter.result({
  "duration": 1676241800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 12372061300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nimal@gmail.com",
      "offset": 22
    },
    {
      "val": "abc%45",
      "offset": 58
    }
  ],
  "location": "stepdefs.user_adds_email_with_and_password_with(String,String)"
});
formatter.result({
  "duration": 202983300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2776702700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_cannot_login_to_system_with_error_message()"
});
formatter.result({
  "duration": 28471100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 732808800,
  "status": "passed"
});
formatter.uri("payment.feature");
formatter.feature({
  "line": 1,
  "name": "Payment process",
  "description": "",
  "id": "payment-process",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User logs to the system",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds email with \"sachini@gmail.com\" and password with \"12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigates into MyAccount Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.browser_is_open()"
});
formatter.result({
  "duration": 1718715100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 11666487500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachini@gmail.com",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 60
    }
  ],
  "location": "stepdefs.user_adds_email_with_and_password_with(String,String)"
});
formatter.result({
  "duration": 211884500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2851456800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 41490800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User pays for a single item through check",
  "description": "",
  "id": "payment-process;user-pays-for-a-single-item-through-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user clicks \"WOMEN\" tab from top menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks Add to cart button on selected dress",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "\"Product successfully added to your shopping cart\" message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks Proceed to checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks Proceed to checkout button in summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks Proceed to checkout button in address page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user ticks terms and condition sentence",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks Proceed to checkout button in shipping page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user navigates to payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user select Pay by check option",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user clicks I confirm my order button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "confirmation message is displayed with \"Your order on My Store is complete.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks Back to orders button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user download the invoice as PDF",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 13
    }
  ],
  "location": "stepdefs.user_clicks_tab_from_top_menu_bar(String)"
});
formatter.result({
  "duration": 6459112300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 259640200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 1
    }
  ],
  "location": "stepdefs.message_is_displayed(String)"
});
formatter.result({
  "duration": 26330200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 6105459700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 2026717200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 2490300000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 74789000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 1798764600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 52015700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_select_Pay_by_check_option()"
});
formatter.result({
  "duration": 1546734600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 3103069500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order on My Store is complete.",
      "offset": 40
    }
  ],
  "location": "stepdefs.confirmation_message_is_displayed_with(String)"
});
formatter.result({
  "duration": 30070000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Back_to_orders_button()"
});
formatter.result({
  "duration": 6766915800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_download_the_invoice_as_PDF()"
});
formatter.result({
  "duration": 105653300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 772111300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User logs to the system",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds email with \"sachini@gmail.com\" and password with \"12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigates into MyAccount Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.browser_is_open()"
});
formatter.result({
  "duration": 2025998300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 7261729900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachini@gmail.com",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 60
    }
  ],
  "location": "stepdefs.user_adds_email_with_and_password_with(String,String)"
});
formatter.result({
  "duration": 186514400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2524942200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 40274500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User pays for multiple items through check",
  "description": "",
  "id": "payment-process;user-pays-for-multiple-items-through-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user clicks \"WOMEN\" tab from top menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user clicks Add to cart button on selected dress",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks Continue shopping button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user adds another item to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "\"Product successfully added to your shopping cart\" message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user clicks Proceed to checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "multiple items are displayed in the summary table",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks Proceed to checkout button in summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks Proceed to checkout button in address page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user ticks terms and condition sentence",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicks Proceed to checkout button in shipping page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user navigates to payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user select Pay by check option",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user clicks I confirm my order button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "confirmation message is displayed with \"Your order on My Store is complete.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user clicks Back to orders button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user download the invoice as PDF",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 13
    }
  ],
  "location": "stepdefs.user_clicks_tab_from_top_menu_bar(String)"
});
formatter.result({
  "duration": 4810035800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 234394800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Continue_shopping_button()"
});
formatter.result({
  "duration": 1156760600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_adds_another_item_to_the_cart()"
});
formatter.result({
  "duration": 211789900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 1
    }
  ],
  "location": "stepdefs.message_is_displayed(String)"
});
formatter.result({
  "duration": 33924500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 3728278900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.multiple_items_are_displayed_in_the_summary_table()"
});
formatter.result({
  "duration": 76123800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 2705220300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 1999631100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 69818200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 2867026000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 47868200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_select_Pay_by_check_option()"
});
formatter.result({
  "duration": 1495369700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 3558230600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order on My Store is complete.",
      "offset": 40
    }
  ],
  "location": "stepdefs.confirmation_message_is_displayed_with(String)"
});
formatter.result({
  "duration": 27846500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Back_to_orders_button()"
});
formatter.result({
  "duration": 5981164300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_download_the_invoice_as_PDF()"
});
formatter.result({
  "duration": 112733100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 764933800,
  "status": "passed"
});
});