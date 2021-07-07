import FavoriteRestaurantDB from "../src/scripts/data/favorite-restaurant";
import createLikeButtonPresenter from "./helper/TestFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking a restaurant", () => {

  beforeEach(() => {
    addLikeButtonContainer();
    FavoriteRestaurantDB.putRestaurant({id: 1});
  });

  afterEach(() => {
    FavoriteRestaurantDB.deleteRestaurant(1);
  });

  it("should display the unlike button when restaurant has been liked", async () => {
    await createLikeButtonPresenter({id: 1});

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it("should not display the like button when restaurant has been liked", async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it("should be able to remove restaurant from favorite list when button unlike clicked", async () => {
    await createLikeButtonPresenter({ id: 1 });

    document.querySelector("[aria-label='unlike this restaurant']").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantDB.getRestaurant(1)).not.toBeDefined();
  });

  it("should not show error if unlike restaurant is not in the list", async () => {
    await createLikeButtonPresenter({ id: 1 });

    await FavoriteRestaurantDB.deleteRestaurant(1);

    document.querySelector("[aria-label='unlike this restaurant']").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantDB.getRestaurants()).toEqual([]);
  });

})