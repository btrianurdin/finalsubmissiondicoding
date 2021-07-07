import FavoriteRestaurantDB from "../src/scripts/data/favorite-restaurant";
import createLikeButtonPresenter from "./helper/TestFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
}; 

describe('Liking a restaurant', () => {

  beforeEach(() => {
    addLikeButtonContainer();
  });

  afterEach(() => {
    FavoriteRestaurantDB.deleteRestaurant(1);
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({id: 1});

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenter({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantDB.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenter({ id: 1 });

    FavoriteRestaurantDB.putRestaurant({id: 1});
    document.querySelector("#likeButton").dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantDB.getRestaurants();
    expect(restaurant).toEqual([{ id: 1 }]);
  });

  it('should not add a restaurant when it has no id', async () => {
    await createLikeButtonPresenter({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDB.getRestaurants()).toEqual([]);
  });

});