Feature('Search');

Scenario('Search for an Item', (I) => {

    I.amOnPage('http://automationpractice.com/index.php');
    I.fillField('search_query', 'Blouse');
    I.click('submit_search');
    I.see('In stock');

});
