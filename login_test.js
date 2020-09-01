Feature('login');

Scenario('Login Scenario', (I) => {

    I.amOnPage('http://automationpractice.com/index.php');
    I.click('Sign in');
    I.fillField('email', 'omerbalkis2@gmail.com');
    I.fillField('passwd', '551997');
    I.click('SubmitLogin');
    I.see('My account');

});
