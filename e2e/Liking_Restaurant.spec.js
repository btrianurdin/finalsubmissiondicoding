Feature('Liking Restaurant');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Liking a restaurant' , async ({ I }) => {
  I.see("No Restaurant List!", ".explore-list__restaurant-not-found");

  I.amOnPage("/");

  const getFirstRestaurantEl = locate(".card-body__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(getFirstRestaurantEl);
  
  I.seeElement(".card-body__title a");
  I.click(getFirstRestaurantEl);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  const favoriteRestaurantTitle = await I.grabTextFrom(".card-body__title");

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
}); 

Scenario('Unliking a restaurant', async ({ I }) => {
  I.see("No Restaurant List!", ".explore-list__restaurant-not-found");

  I.amOnPage("/");
  I.seeElement(".card-body__title a");
  I.click(locate(".card-body__title a").first());
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.seeElement(".card-body__title a");
  I.click(locate(".card-body__title a").first());
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  
  I.see("No Restaurant List!", ".explore-list__restaurant-not-found")
});