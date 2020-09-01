Feature('Add');

Scenario('Add to Cart', (I) => {

    I.amOnPage('http://automationpractice.com/index.php');
    I.moveCursorTo('#block_top_menu > ul > li:nth-child(2) > a'); //Dresses
    I.click('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a'); //Spring Dresses
    I.see("Printed Chiffon Dress");
    I.moveCursorTo('//*[@id="center_column"]/ul/li[3]/div/div[1]/div/a[1]/img'); //Spring Dresses 
    I.click('//*[@id="center_column"]/ul/li[3]/div/div[2]/div[2]/a[1]/span') //Add to cart
    I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span'); //Proceed to checkout
    I.see('Printed Chiffon Dress');

});
