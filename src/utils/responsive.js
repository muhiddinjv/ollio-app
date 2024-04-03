import {figma_screen_width, figma_screen_height} from './consts';
import {Dimensions} from 'react-native';
const Width = width => {
  const windowWidth = Dimensions.get('window').width;
  return (windowWidth / figma_screen_width) * width;
};
export {Width};
const Height = height => {
  const windowHeight = Dimensions.get('window').height;
  return (windowHeight / figma_screen_height) * height;
};
export {Height};