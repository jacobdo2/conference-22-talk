const theme = {
  sizing: {
    containerWidth: 1440
  },
  palette: {
    groupBlue: {
      primary: '#002B45',
      '15': '#D9DFE3',
      '24': '#C2CCD2',
      '45': '#8C9FAB',
      '57': '#6E8695'
    },
    blue: {
      primary: '#3B98F1',
      medium: '#6BB7F9'
    },
    white: {
      primary: '#FFFFFF'
    },
    green: {
      primary: '#2CA968',
      light: '#A5E1B9'
    },
    red: { primary: '#C92332', light: '#F8AAA5' },
    orange: { primary: '#F76900', light: '#FCC694' },
    text: {
      light: {
        primary: '#fff'
      },
      dark: {
        primary: '#000000',
        secondary: '#4D4E4C70',
        blue: '#002B45'
      }
    }
  }
};
export const variantToColorMap = {
  primary: theme.palette.groupBlue.primary,
  neutral: theme.palette.groupBlue[24],
  success: theme.palette.green.primary,
  warning: theme.palette.orange.primary,
  danger: theme.palette.red.primary
};

export default theme;
