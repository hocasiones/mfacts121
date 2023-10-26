import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#80d1f1',
  light: '#4fbeea',
  main: '#00a3e4',
  dark: '#0083c2',
  darker: '#00538d',
};
const SECONDARY = {
  lighter: '#E3FCD6',
  light: '#96ED84',
  main: '#6DDC62',
  dark: '#34C634',
  darker: '#1A8E2E',
};
const INFO = {
  lighter: '#f6ed47',
  light: '#f6ed47',
  main: '#f7ec20',
  dark: '#f7d916',
  darker: '#f7c104',
};
const SUCCESS = {
  lighter: '#a6e4a3',
  light: '#7eda7b',
  main: '#34C634',
  dark: '#1ba522',
  darker: '#007400',
};
const WARNING = {
  lighter: '#FFFCD9',
  light: '#FFF48E',
  main: '#FF6502',
  dark: '#E05B05',
  darker: '#B7A122',
};
const ERROR = {
  lighter: '#ff370d',
  light: '#ff3007',
  main: '#ff2600',
  dark: '#f11900',
  darker: '#da0000',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: {
    black: '#000',
    white: '#fff',
    blue: '#00A4E4',
    red: '#FF2600',
    green: '#34C634',
    yellow: '#FFE844',
    grey: '#A8A8A8',
    greyLight: '#F2F3F5',
    orange: '#FF6502',
    purple: '#A202EE',
  },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: '#fff' },
  warning: { ...WARNING, contrastText: '#fff' },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
