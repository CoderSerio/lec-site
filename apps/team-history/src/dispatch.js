// 这是一个板子，需要cv到各个微应用的根目录下，并在入口处引入

if (window.__MICRO_APP_ENVIRONMENT__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__;
}
