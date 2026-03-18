import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export function responsiveFontSize(fontSize: number) {

  return moderateScale(fontSize);
}

export function responsivePadding(padding: number) {
  return moderateScale(padding);
}

export function responsiveMargin(margin: number) {
  return moderateScale(margin);
}

export function responsiveWidth(width: number) {
  return scale(width);
}

export function responsiveHeight(height: number) {
  return verticalScale(height);
}
