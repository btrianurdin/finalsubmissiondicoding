import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurant = favoriteRestaurant;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const movie = await this._favoriteRestaurant.getRestaurant(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const { id } = this._restaurant;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
