import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: `${CONFIG.BASE_URL}/detail`,
  IMAGE_SMALL: `${CONFIG.BASE_IMAGE_URL}/small`,
  IMAGE_MEDIUM: `${CONFIG.BASE_IMAGE_URL}/medium`,
  IMAGE_LARGE: `${CONFIG.BASE_IMAGE_URL}/large`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
