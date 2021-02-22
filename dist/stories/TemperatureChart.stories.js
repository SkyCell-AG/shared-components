"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _TemperatureChart = _interopRequireDefault(require("../TemperatureChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TemperatureChartStory = {
  title: 'Example/TemperatureChart',
  component: _TemperatureChart.default,
  argTypes: {
    ambient: {
      control: 'array'
    },
    simulated: {
      control: 'array'
    }
  }
};

var Template = function Template(_ref) {
  var ambient = _ref.ambient,
      simulated = _ref.simulated,
      rest = _objectWithoutProperties(_ref, ["ambient", "simulated"]);

  return /*#__PURE__*/_react.default.createElement(_TemperatureChart.default, _extends({
    simulated: simulated.map(function (num) {
      return parseInt(num, 10);
    }),
    ambient: ambient.map(function (num) {
      return parseInt(num, 10);
    })
  }, rest));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  ambient: [20, 52, 32, 40, 58, 22, 52, 32, 41, 54, 20, 52, 32, 40, 58, 22, 52, 32, 41, 54],
  simulated: [2, 3, 1, 4, 2, 2, 3, 1, 4, 2, 2, 3, 1, 4, 2, 2, 3, 1, 4, 2],
  energyLevel: [100, 98, 96, 97, 95, 100, 98, 96, 97, 95, 100, 98, 96, 97, 95, 100, 98, 96, 97, 95],
  excursion: 4
};
var _default = TemperatureChartStory;
exports.default = _default;