(function (modules) {
  function require(id) {
    const module = {
      exports: {}
    }
    modules[id](module, module.exports, require)
    return module.exports
  }
  require('./test/entry.js')
})({
  './test/entry.js': (function (module, exports, require) {
    "use strict";

    var _a = require("./a.js");

    var _a2 = _interopRequireDefault(_a);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    console.log(_a2.default);
  }),
  './a.js': (function (module, exports, require) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = test = 1;
  }),
})