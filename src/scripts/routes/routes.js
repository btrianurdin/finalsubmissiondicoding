import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import List from '../views/pages/list';

const routes = {
  '/': new List(),
  '/detail/:id': new Detail(),
  '/favorite': new Favorite(),
};

export default routes;
