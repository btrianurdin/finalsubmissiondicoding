import FavoriteRestaurantDB from '../../data/favorite-restaurant';
import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import SendReview from '../../utils/send-review';
import { createCircleLoadingTemplate, createDetailRestaurant } from '../templates/template-creator';

class Detail {
  async didMount() {
    const urlId = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail-content');
    const detail = await RestaurantsSource.restaurantDetail(urlId.id);
    detailContainer.innerHTML = '';
    detailContainer.innerHTML = createDetailRestaurant(detail);

    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantDB,
      restaurant: {
        id: detail.id,
        city: detail.city,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });

    const sendReview = new SendReview({
      id: urlId.id,
      nameEl: '#review_add-name',
      reviewEl: '#review_add-msg',
      buttonEl: '#review_add-btn',
      wrapper: '.detail-review-content',
    });
    sendReview.init();
  }

  async render() {
    return `
      <div id="main">
        <article class="detail" id="detail-content">
          ${createCircleLoadingTemplate()}
        </article>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  }
}

export default Detail;
