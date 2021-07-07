const createComponentCategories = (categories) => (
  categories.map((category) => `<a href="#">${category.name}</a>`).join('')
);

const createComponentMenuItems = (menus) => (
  menus.map((menu) => `<li>${menu.name}</li>`).join('')
);

const createComponentCustomerReviews = (reviews) => (
  reviews.map((_review) => `
  <article class="detail-review-card">
    <div class="detail-review-head">
      <div class="detail-review-head__img">
        <img src="images/other/cust-review-profile.jpg" alt="Review Profile" /> 
      </div>
      <h3>${_review.name}</h3>
      <h4>${_review.date}</h4>
    </div>
    <div class="detail-review-msg">
      <p>${_review.review}</p>
    </div>
  </article>`).join('')
);

export {
  createComponentCategories,
  createComponentMenuItems,
  createComponentCustomerReviews,
};
