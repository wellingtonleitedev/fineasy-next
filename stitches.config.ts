import { createStitches } from '@stitches/react';
import {
  gray,
  red,
  green,
  grayDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...red,
      ...green,
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...redDark,
    ...greenDark,
  }
})