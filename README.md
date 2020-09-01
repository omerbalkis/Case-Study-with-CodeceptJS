# Case Study with CodeceptJS

CodeceptJS is a multi-backend testing framework. It can execute tests using different libraries like WebDriverIO, Puppeteer, Protractor, etc
In this case study, i used Puppeteer library.

Installations:
 - node.js must be installed.
 - Chrome Browser must be installed.
 - Visual Studio Code is recommended as editor.

# Cases

### Case 1: login_test
Login
1. Go to “automationpractice.com”.
2. Click Sign In button.
3. Fill email and password fields.
4. Click Sign In button.
5. Assert that user logged in successfully

### Case 2: search_test
Search for an Item
1. Go to “automationpractice.com”
2. Search for “Blouse” item by using search bar.
3. Assert that item is listed in results page.

### Case 3: add_test
1. Go to “automationpractice.com”
2. From the navigation bar navigate to Dresses > Summer Dresses
3. Assert that results are listed.
4. Add “Printed Chiffon Dress” item to cart.
5. Go to the cart.
6. Assert that “Printed Chiffon Dress” is added to the cart.
