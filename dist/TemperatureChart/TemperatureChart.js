"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _victory = require("victory");

var _getScaleOffset = _interopRequireDefault(require("./getScaleOffset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var propTypes = {
  ambient: _propTypes.default.arrayOf(_propTypes.default.number),
  simulated: _propTypes.default.arrayOf(_propTypes.default.number),
  energyLevel: _propTypes.default.arrayOf(_propTypes.default.number),
  upperTempBound: _propTypes.default.number,
  lowerTempBound: _propTypes.default.number,
  excursion: _propTypes.default.number
};
var defaultProps = {
  upperTempBound: 8,
  lowerTempBound: 2,
  excursion: undefined
};
var axisStyle = {
  axisLabel: {
    fontSize: 12,
    fontStyle: 'italic',
    padding: 30
  },
  tickLabels: {
    fontSize: 12,
    padding: 2
  }
};
var axisLineStyle = {
  stroke: '#ccc'
};

var generateBorderLabel = function generateBorderLabel(title) {
  return function (_ref) {
    var datum = _ref.datum,
        data = _ref.data;

    if (datum === data[data.length - 1]) {
      return title;
    }

    return '';
  };
};

var rangeLineStyle = {
  data: {
    stroke: '#edae49',
    strokeDasharray: [3, 2]
  },
  parent: {
    border: '1px solid #ccc'
  },
  labels: {
    fontSize: 12,
    padding: 2,
    fill: '#edae49'
  }
};

var TemperatureChart = function TemperatureChart(_ref2) {
  var ambient = _ref2.ambient,
      simulated = _ref2.simulated,
      energyLevel = _ref2.energyLevel,
      upperTempBound = _ref2.upperTempBound,
      lowerTempBound = _ref2.lowerTempBound,
      excursion = _ref2.excursion;
  var scale = (0, _react.useMemo)(function () {
    return (0, _getScaleOffset.default)({
      ambient: ambient,
      simulated: simulated
    });
  }, [ambient, simulated]);
  var energyLevelScaled = (0, _react.useMemo)(function () {
    return energyLevel.map(function (val) {
      return val * scale;
    });
  }, [scale, energyLevel]);
  var tickPercentValues = (0, _react.useMemo)(function () {
    return [0, 20, 40, 60, 80, 100].map(function (val) {
      return val * scale;
    });
  }, [scale]);
  var tickPercentFormat = (0, _react.useCallback)(function (val) {
    return "".concat(val / scale, "%");
  }, [scale]);
  var generateBoundaryData = (0, _react.useCallback)(function (boundary) {
    return [{
      x: 0,
      y: boundary
    }, {
      x: simulated.length - 1,
      y: boundary
    }];
  }, [simulated]);
  var tempRangeTopData = (0, _react.useMemo)(function () {
    return generateBoundaryData(upperTempBound);
  }, [generateBoundaryData, upperTempBound]);
  var tempRangeBottomData = (0, _react.useMemo)(function () {
    return generateBoundaryData(lowerTempBound);
  }, [generateBoundaryData, lowerTempBound]);
  return /*#__PURE__*/_react.default.createElement(_victory.VictoryChart, null, /*#__PURE__*/_react.default.createElement(_victory.VictoryAxis, {
    gridComponent: /*#__PURE__*/_react.default.createElement(_victory.LineSegment, {
      style: {
        stroke: '#ccc'
      }
    })
  }), /*#__PURE__*/_react.default.createElement(_victory.VictoryAxis, {
    dependentAxis: true,
    label: "Temperature (\u2103elsius)",
    style: axisStyle,
    gridComponent: /*#__PURE__*/_react.default.createElement(_victory.LineSegment, {
      style: axisLineStyle
    })
  }), /*#__PURE__*/_react.default.createElement(_victory.VictoryAxis, {
    dependentAxis: true,
    orientation: "right",
    label: "Energy Level",
    tickValues: tickPercentValues,
    tickFormat: tickPercentFormat,
    style: axisStyle,
    gridComponent: /*#__PURE__*/_react.default.createElement(_victory.LineSegment, {
      style: axisLineStyle
    })
  }), /*#__PURE__*/_react.default.createElement(_victory.VictoryLine, {
    data: simulated,
    style: {
      data: {
        stroke: '#61c6e9'
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_victory.VictoryLine, {
    data: energyLevelScaled,
    style: {
      data: {
        stroke: '#9e9e9e'
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_victory.VictoryLine, {
    data: ambient,
    style: {
      data: {
        stroke: '#cf3b8a'
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_victory.VictoryLine, {
    data: tempRangeTopData,
    style: rangeLineStyle,
    labels: generateBorderLabel('Max')
  }), /*#__PURE__*/_react.default.createElement(_victory.VictoryLine, {
    data: tempRangeBottomData,
    style: rangeLineStyle,
    labels: generateBorderLabel('Min')
  }), excursion !== undefined && /*#__PURE__*/_react.default.createElement(_victory.VictoryAxis, {
    dependentAxis: true,
    label: "Excursion",
    axisValue: excursion,
    style: {
      axis: {
        stroke: 'red'
      },
      tickLabels: {
        fill: 'none'
      },
      axisLabel: {
        fontSize: 8,
        padding: -10
      }
    }
  }));
};

TemperatureChart.propTypes = propTypes;
TemperatureChart.defaultProps = defaultProps;
var _default = TemperatureChart;
exports.default = _default;