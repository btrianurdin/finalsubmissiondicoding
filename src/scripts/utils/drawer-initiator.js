const DrawerInitiator = {
  init({ drawer, button }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(drawer, event);
    });
  },

  _toggleDrawer(drawer, event) {
    event.stopPropagation();
    drawer.classList.toggle('nav-open');
  },
};

export default DrawerInitiator;
