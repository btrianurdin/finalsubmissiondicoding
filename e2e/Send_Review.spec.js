const assert = require('assert');

Feature('Send Review');

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario('Send a review for a restaurant', async ({ I }) => {
  const searchKafeinResto = locate(".card-body__title a").withText("Kafein");
  I.click(searchKafeinResto);

  I.see('Berikan Review', ".detail-review-add__title");
  I.fillField("Your Name", "ORANG AWAM");
  I.fillField("Message", "e2e test");

  I.click("Kirim Review");

  I.dontSeeElement(".failed-send-review");
});

Scenario('Send a review for a restaurant with empty field', async ({ I }) => {
  const searchKafeinResto = locate(".card-body__title a").withText("Kafein");
  I.click(searchKafeinResto);

  I.see('Berikan Review', ".detail-review-add__title");
  I.fillField("Your Name", "");
  I.fillField("Message", "");

  I.click("Kirim Review");

  I.seeInPopup("Data masih kosong!");
});