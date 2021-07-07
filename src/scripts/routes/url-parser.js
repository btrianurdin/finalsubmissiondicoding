const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    const urlSplited = this._urlSplit(url);
    return this._urlCombiner(urlSplited);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    return this._urlSplit(url);
  },

  _urlSplit(url) {
    const split = url.split('/');
    return {
      resource: split[1] || null,
      id: split[2] || null,
      verb: split[3] || null,
    };
  },

  _urlCombiner(urlSplited) {
    return (urlSplited.resource ? `/${urlSplited.resource}` : '/')
    + (urlSplited.id ? '/:id' : '')
    + (urlSplited.verb ? `/${urlSplited.verb}` : '');
  },
};

export default UrlParser;
