import theme from '../../theme';

export const navigationStyle = {
  height: 50,
  display: 'flex',
  alignItems: 'center',
  background: theme.groupBlue.primary,
  padding: 4
};

export const navigationLinkContainer = {
  width: '100%',
  maxWidth: 1440,
  heigth: '100%',
  margin: 'auto',
  display: 'flex',
  gap: 4
};

export const getNavigationLinkStyle = (isActive: boolean) => {
  const activeStyle = {
    border: `1px solid ${theme.blue.primary}`,
    borderRadius: 2,
    color: theme.blue.primary
  };

  const baseStyle = {
    alignItems: 'center',
    color: theme.white.primary,
    display: 'flex',
    fontSize: 12,
    height: 24,
    padding: '0 8px',
    textDecoration: 'none'
  };

  if (isActive) {
    return {
      ...baseStyle,
      ...activeStyle
    };
  }

  return baseStyle;
};
