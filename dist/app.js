"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('dotenv/config');
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

require('./database');

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );
    this.isDev = process.env.NODE_ENV !== 'production';

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(_express2.default.json());
    this.server.use(
      '/files',
      _express2.default.static(_path2.default.resolve(__dirname, '..', 'temp', 'uploads'))
    );
  }

  routes() {
    this.server.use(_routes2.default);
  }
}

exports. default = new App().server;
