import FavoriteRestaurantDB from '../../data/favorite-restaurant';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantView from './liked-restaurant/favorite-restaurant-view';

class Favorite {
  constructor(){
    this._view = new FavoriteRestaurantView();
  }

  async didMount() {
    new FavoriteRestaurantShowPresenter({ view: this._view, favoriteRestaurant: FavoriteRestaurantDB });
  }

  async render() {
    return this._view.getTemplate();
  }
}

export default Favorite;
