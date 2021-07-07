import FavoriteRestaurantDB from "../../src/scripts/data/favorite-restaurant";
import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantDB,
    restaurant: restaurant,
  });
}

export default createLikeButtonPresenter;