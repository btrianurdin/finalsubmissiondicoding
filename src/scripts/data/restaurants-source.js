import NoNetwork from '../Errors/no-network';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async restaurantList() {
    let fetchData;
    try {
      fetchData = await fetch(API_ENDPOINT.LIST);
    } catch (err) {
      setTimeout(() => {
        NoNetwork.init('#main').show();
      }, 1500);
    }
    const getResponse = await fetchData.json();
    return getResponse.restaurants;
  }

  static async restaurantDetail(id) {
    let fetchData;
    try {
      fetchData = await fetch(`${API_ENDPOINT.DETAIL}/${id}`);
    } catch (err) {
      setTimeout(() => {
        NoNetwork.init('#main').show();
      }, 1500);
    }
    const getResponse = await fetchData.json();
    return getResponse.restaurant;
  }

  static async addCustomerReview(reviewData) {
    let sendData;
    try{
      sendData = await fetch(`${API_ENDPOINT.ADD_REVIEW}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(reviewData),
      });
    } catch(err){
      return false;
    }
    
    const getResponse = await sendData.json();
    return getResponse;
  }
}

export default RestaurantsSource;
