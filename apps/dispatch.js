// 这是一个板子，需要cv到各个微应用的根目录下，并在src下引入
// eslint-disable-next-line no-undef
if (window.__MICRO_APP_ENVIRONMENT__) {
  // eslint-disable-next-line no-undef, camelcase
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__;
}
