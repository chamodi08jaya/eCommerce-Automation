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
  "duration": 4498248900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 12867670000,
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
  "duration": 199860200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 13467623300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 61636400,
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
  "duration": 12109964600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 225732400,
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
  "duration": 30132200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 12693254000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 7692194500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 9021711600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 78492000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 7336508300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 36049600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 798356400,
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
  "duration": 1749520400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 13197643100,
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
  "duration": 202913100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 13732340500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 60420000,
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
  "duration": 11997686800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 215878800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Continue_shopping_button()"
});
formatter.result({
  "duration": 6849934200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_adds_another_item_to_the_cart()"
});
formatter.result({
  "duration": 364749200,
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
  "duration": 38712100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 16572024800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.multiple_items_are_displayed_in_the_summary_table()"
});
formatter.result({
  "duration": 58872900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 10139505000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 421247500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 30070584800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"cgv\"]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-09P7JJ4\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [58dfa22007fea04ce3e62cd4553b774e, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"cgv\"]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56482}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56482/devtoo..., se:cdpVersion: 95.0.4638.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58dfa22007fea04ce3e62cd4553b774e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat stepDefinitions.stepdefs.user_ticks_terms_and_condition_sentence(stepdefs.java:111)\r\n\tat ✽.Then user ticks terms and condition sentence(item.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1680461300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 12692835200,
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
  "duration": 180885200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 13255934200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 57757200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 689755900,
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
  "duration": 1641008800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 13235968200,
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
  "duration": 189567300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 6099607900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_cannot_login_to_system_with_error_message()"
});
formatter.result({
  "duration": 33356300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 697824700,
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
  "duration": 1699223900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 11513516000,
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
  "duration": 181379300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 10232103300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 46487700,
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
  "duration": 9590577100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 218960500,
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
  "duration": 27112900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 18197982000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 10069691700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 7858634900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 73162400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 8701539900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 32276800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_select_Pay_by_check_option()"
});
formatter.result({
  "duration": 7481240100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 15049371000,
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
  "duration": 29913100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Back_to_orders_button()"
});
formatter.result({
  "duration": 14349440900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_download_the_invoice_as_PDF()"
});
formatter.result({
  "duration": 117194300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 763378500,
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
  "duration": 1650815200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.login_page_is_open()"
});
formatter.result({
  "duration": 10554101900,
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
  "duration": 210783900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 10725419000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_into_MyAccount_Page()"
});
formatter.result({
  "duration": 47603200,
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
  "duration": 9422157800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Add_to_cart_button_on_selected_dress()"
});
formatter.result({
  "duration": 253321200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Continue_shopping_button()"
});
formatter.result({
  "duration": 4574312700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_adds_another_item_to_the_cart()"
});
formatter.result({
  "duration": 251620100,
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
  "duration": 32624900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 9324794900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.multiple_items_are_displayed_in_the_summary_table()"
});
formatter.result({
  "duration": 57770700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_summary_page()"
});
formatter.result({
  "duration": 7996842100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_address_page()"
});
formatter.result({
  "duration": 7919130200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_ticks_terms_and_condition_sentence()"
});
formatter.result({
  "duration": 74781700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Proceed_to_checkout_button_in_shipping_page()"
});
formatter.result({
  "duration": 7196095900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_navigates_to_payment_page()"
});
formatter.result({
  "duration": 29635800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_select_Pay_by_check_option()"
});
formatter.result({
  "duration": 5866644800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_I_confirm_my_order_button()"
});
formatter.result({
  "duration": 12135864600,
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
  "duration": 31997800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_clicks_Back_to_orders_button()"
});
formatter.result({
  "duration": 12067268900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_download_the_invoice_as_PDF()"
});
formatter.result({
  "duration": 101168500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.browser_is_closed()"
});
formatter.result({
  "duration": 725157800,
  "status": "passed"
});
});