import API_ENDPOINT from '../../globals/api-endpoint';
import { createComponentCategories, createComponentCustomerReviews, createComponentMenuItems } from './component-creator';

const createRestaurantList = (restaurants) => (
  `<article class="explore-list__item" id="${restaurants.id}">
    <div class="card">
      <div class="card-header">
        <div class="card-header__img">
          <img
              class="lazyload"
              width="100%"
              height="250"
              src='${API_ENDPOINT.IMAGE_SMALL}/${restaurants.pictureId}'
              alt="${restaurants.name}"></img>
        </div>
        <div class="card-header-label">
          <h2 class="card-header-label__city">${restaurants.city || "-"}</h2>
          <h2 class="card-header-label__rating">Rating: ${restaurants.rating || "-"}</h2>
        </div>
      </div>
      <div class="card-body">
        <h1 class="card-body__title">
          <a href="/#/detail/${restaurants.id}">${restaurants.name || "-"}</a>
        </h1>
        <p class="card-body__desc">${restaurants.description || "-"}</p>
      </div>
    </div>
  </article>`
);

const createSkeletonTemplate = (count) => {
  return `<div class="explore-list__item skeleton-container">
        <div class="skeleton">
          <div class="skeleton-header loading"></div>
          <div class="skeleton-body">
            <div class="skeleton-body__title loading"></div>
            <div class="skeleton-body__desc loading"></div>
            <div class="skeleton-body__desc loading"></div>
            <div class="skeleton-body__desc loading"></div>
          </div>
        </div>
      </div>`.repeat(count);
}

const createCircleLoadingTemplate = () => {
  return `<div class="loading"><div class="lds-ripple"><div></div><div></div></div></div>`;
}

const createDetailRestaurant = (detail) => `
  <section class="detail-content">
    <article class="d-content-header">
      <div class="d-content-header-flex">
        <h1 class="d-content-header__title">${detail.name}</h1>
        <div class="d-content-header__rating">
          <i class="bi-star-fill"></i> <h2>${detail.rating}</h2>
        </div>
      </div>
      <div class="d-content-header-city">
        <i class="bi-geo-alt-fill"></i> <p>${detail.city}</p>
      </div>
    </article>
    <article class="d-content-img">
      <img class="d-content-img__image" src="${API_ENDPOINT.IMAGE_LARGE}/${detail.pictureId}" alt="${detail.name}">
    </article>
    <article class="d-content-desc">
      <h2 class="d-content-desc__title">Description</h2>
      <p class="d-content-desc__p">${detail.description}</p>
    </article>
  </section>
  <section class="detail-info">
    <div class="detail-info-wrap">
      <h2 class="detail-info__title">Information</h2>
      <article class="detail-info__categories">
        <h3>Categories</h3>
        <div class="detail-info__categories-area">${createComponentCategories(detail.categories)}</div>
      </article>
      <article class="detail-info__menus">
        <h3>Menu's</h3>
        <div class="detail-info__menus-food">
          <div>
            <h4>Foods</h4>
            <ul>
              ${createComponentMenuItems(detail.menus.foods)}
            </ul>
          </div>
          <div>
            <h4>Drinks</h4>
            <ul>
              ${createComponentMenuItems(detail.menus.drinks)}
            </ul>
          </div>
        </div>
      </article>
      <article class="detail-info__address">
        <h3>Address</h3>
        <div class="detail-info__address-area">
          <p>${detail.address}, ${detail.city}</p>
        </div>
      </article>
    </div>
  </section> 
  <section class="detail-review">
    <h2 class="detail-review__title">Customer Reviews</h2>
    <div class="detail-review-content">
      ${createComponentCustomerReviews(detail.customerReviews)}
    </div>
    <div class="detail-review-add">
      <div class="detail-review-card">
        <h2 class="detail-review-add__title">Berikan Review</h2>
        <form>
          <div class="detail-review-add__name">
            <label for="review_add-name">Your Name</label>
            <input type="text" id="review_add-name" name="review_add-name" />
          </div>
          <div class="detail-review-add__msg">
            <label for="review_add-msg">Message</label>
            <textarea id="review_add-msg" rows="5" name="review_add-msg"></textarea>
          </div>
          <button type="submit" class="btn-send-review" aria-label="Kirim Review" id="review_add-btn">
            Kirim Review
          </button>
        </form>
      </div>
    </div>
  </section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantList,
  createDetailRestaurant,
  createSkeletonTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createCircleLoadingTemplate
};
