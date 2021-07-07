import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantList, createSkeletonTemplate } from '../templates/template-creator';

class List {
  async didMount() {
    const restaurantContainer = document.querySelector('#explore-list');
    const restaurants = await RestaurantsSource.restaurantList();
    restaurantContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantList(restaurant);
    });
  }

  async render() {
    return `
      <div class="hero">
        <div class="hero__img">
          <picture>
            <source media="(max-width: 600px)" srcset="images/heros/hero-image-small.jpg">
            <img
                width="100%" 
                height="300"
                src="images/heros/hero-image-large.jpg"
                alt="Hero Image"></img>
          </picture>
        </div>
        <div class="hero__inner">
          <h1 class="hero__title">Makan Enak Setiap Hari</h1>
          <p class="hero__tagline">Mudahnya makan enak untuk kebutuhanmu setiap hari</p>
        </div>
      </div>

      <div id="main">
        <section class="explore">
          <h1 class="explore-label">Explore Restaurant</h1>
          <div class="explore-list" id="explore-list">
            ${createSkeletonTemplate(16)}
          </div>
        </section>
      </div>
    `;
  }
}

export default List;
