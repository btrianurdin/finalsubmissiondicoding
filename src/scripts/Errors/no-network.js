const NoNetwork = {
  init(wrapEl) {
    this._wrapEl = document.querySelector(wrapEl);
    return this;
  },
  show() {
    this._wrapEl.innerHTML += '<div class="no-network-msg"><h1>Beli baju ke tanah abang</h1><h1>Lu sedang <i>offline</i>, Bang. <br>🥱</h1></div>';
  },
};

export default NoNetwork;
