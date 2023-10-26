import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------------------------------------

const FONT_PRIMARY = "'Fredoka One', cursive";
const FONT_SECONDARY = "'Public Sans', sans-serif";

const typography = {
  fontFamily: FONT_SECONDARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 80 / 64,
    fontSize: pxToRem(30),
    // letterSpacing: 2,
    marginBottom: '20px',
    ...responsiveFontSizes({ sm: 30, md: 34, lg: 38 }),
  },
  h2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 64 / 48,
    fontSize: pxToRem(28),
    marginBottom: '20px',
    ...responsiveFontSizes({ sm: 28, md: 32, lg: 36 }),
  },
  h3: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    marginBottom: '20px',
    ...responsiveFontSizes({ sm: 24, md: 28, lg: 32 }),
  },
  h4: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    marginBottom: '20px',
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 28 }),
  },
  h5: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    marginBottom: '20px',
    ...responsiveFontSizes({ sm: 18, md: 20, lg: 24 }),
  },
  h6: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    marginBottom: '20px',
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    marginBottom: '20px',
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    marginBottom: '20px',
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
