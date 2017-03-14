import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'logo': {
    'width': [{ 'unit': 'px', 'value': 120 }],
    'height': [{ 'unit': 'px', 'value': 31 }],
    'background': '#333',
    'borderRadius': '6px',
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left'
  },
  'carousel > div': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': 'cornflowerblue'
  },
  'cardrow': {
    'background': '#ECECEC',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  // Increase grid spacing of 16px
  'cardrow row1': {
    'marginLeft': [{ 'unit': 'px', 'value': -8 }],
    'marginRight': [{ 'unit': 'px', 'value': -8 }]
  },
  'cardrow row1 > div': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
  }
});
