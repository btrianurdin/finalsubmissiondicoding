import RestaurantsSource from '../data/restaurants-source';
import { createComponentCustomerReviews } from '../views/templates/component-creator';
import { createCircleLoadingTemplate } from '../views/templates/template-creator';

class SendReview {
  constructor({
    id,
    nameEl,
    reviewEl,
    buttonEl,
    wrapper,
  }) {
    this._id = id;
    this._name = document.querySelector(nameEl);
    this._review = document.querySelector(reviewEl);
    this._button = document.querySelector(buttonEl);
    this._wrapper = document.querySelector(wrapper);
  }

  async init() {
    await this._btnClick();
  }

  async _btnClick() {
    this._button.addEventListener('click', async (event) => await this._sendAction(event));
  }

  async _sendAction(event) {
    event.preventDefault();
    const reviewName = this._name.value.trim();
    const reviewMsg = this._review.value.trim();
    if (!this._name.value.trim() || !this._review.value.trim()) {
      // eslint-disable-next-line no-alert
      alert('Data masih kosong!');
      return;
    }
    this._name.value = '';
    this._review.value = '';
    this._wrapper.innerHTML = createCircleLoadingTemplate();

    const fetchResponse = await RestaurantsSource.addCustomerReview({
      id: this._id,
      name: reviewName,
      review: reviewMsg,
    });

    this._wrapper.innerHTML = '';
    
    if (!fetchResponse) {
      this._wrapper.innerHTML = this._failedSendReviewTemplate();
    } else {
      this._wrapper.innerHTML += createComponentCustomerReviews(fetchResponse.customerReviews);
    }

  }

  _failedSendReviewTemplate(){
    return `<h3 class="failed-send-review">Failed to send review!</h3>`;
  }
}

export default SendReview;
