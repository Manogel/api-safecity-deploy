"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);
var _path = require('path');

exports. default = {
  storage: _multer2.default.diskStorage({
    destination: _path.resolve.call(void 0, __dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, cb) => {
      _crypto2.default.randomBytes(16, (error, resp) => {
        if (error) return cb(error);
        return cb(null, resp.toString(`hex`) + _path.extname.call(void 0, file.originalname));
      });
    },
  }),
};
