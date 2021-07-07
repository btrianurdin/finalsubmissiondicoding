import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skeleton-ui.css';
// import '@fortawesome/fontawesome-free/js/all';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  drawer: document.querySelector('#navDrawer'),
  button: document.querySelector('#menu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
