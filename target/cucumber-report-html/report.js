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
  "duration": 7382032600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 9841603900,
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
  "duration": 205730400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 6071050400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 53030500,
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
  "duration": 9622677500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 241723100,
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
  "duration": 34354000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 12103635500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 2431098600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 3446008500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 70233500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 4261982400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 33059300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 728598600,
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
  "duration": 1837741100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 7291268000,
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
  "duration": 200353800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 4731317700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 39332400,
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
  "duration": 4573909400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 212782900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Continue_shopping_button()"
});
formatter.result({
  "duration": 3855533100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_adds_another_item_to_the_cart()"
});
formatter.result({
  "duration": 358422600,
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
  "duration": 33580000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 7127777000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.multiple_items_are_displayed_in_the_summary_table()"
});
formatter.result({
  "duration": 55310100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 2695795500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 1900789200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 73860400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 2953622700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 32572700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 793541200,
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
  "duration": 1929567900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 6358890200,
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
  "duration": 207303900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 6748912600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 44630800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 698830300,
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
  "duration": 2034890600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 7534708700,
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
  "duration": 192426500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2551292600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_cannot_login_to_system_with_error_message()"
});
formatter.result({
  "duration": 36107600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 734680200,
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
  "duration": 1709461100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 6663582000,
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
  "duration": 196685100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 3167996200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 40087300,
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
  "duration": 3639640400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 236664700,
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
  "duration": 26456400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 4468819000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 1898011500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 1658614000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 65911300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 2204489300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 27764300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_select_Pay_by_check_option()"
});
formatter.result({
  "duration": 1926828900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 4015880000,
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
  "duration": 28893100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Back_to_orders_button()"
});
formatter.result({
  "duration": 3182619900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_download_the_invoice_as_PDF()"
});
formatter.result({
  "duration": 107387100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 736874700,
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
  "duration": 2148992700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 7268731800,
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
  "duration": 196291600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 3320449900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 43539300,
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
  "duration": 6281879300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 239482800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Continue_shopping_button()"
});
formatter.result({
  "duration": 2724321700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_adds_another_item_to_the_cart()"
});
formatter.result({
  "duration": 336177800,
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
  "duration": 48286900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 6383312800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.multiple_items_are_displayed_in_the_summary_table()"
});
formatter.result({
  "duration": 69305500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 1892007000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 1889046600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 65135200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 3828445400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 31619600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_select_Pay_by_check_option()"
});
formatter.result({
  "duration": 2156656300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 7303564300,
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
  "duration": 29122300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Back_to_orders_button()"
});
formatter.result({
  "duration": 5287164600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_download_the_invoice_as_PDF()"
});
formatter.result({
  "duration": 91819500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 727085900,
  "status": "passed"
});
});