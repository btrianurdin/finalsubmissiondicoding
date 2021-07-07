const { createRestaurantList } = require("../../templates/template-creator");

class FavoriteRestaurantView {
  getTemplate(){
    return `
      <div id="main">
        <section class="explore">
          <h1 class="explore-label">Favorite Restaurants</h1>
          <div class="explore-list" id="explore-list">

          </div>
        </section>
      </div>
    `;
  }

  showFavoriteRestaurants(restaurants = []){
    let html;
    console.log(restaurants);
    if (restaurants.length) {
      html = restaurants.reduce((prev, restaurant) => prev.concat(createRestaurantList(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.querySelector("#explore-list").innerHTML = html;
  }

  _getEmptyRestaurantTemplate(){
    return `<div class="explore-list__restaurant-not-found">No Restaurant List!</div>`;
  }
}

export default FavoriteRestaurantView;