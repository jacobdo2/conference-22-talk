import { theme, variantToColorMap } from 'ui';
import { TrackingEvent } from './mock-data/trackingEventFactory';

const { palette } = theme;

export const variantToMuteColorMap: { [k in TrackingEvent['variant']]: string } = {
  primary: palette.groupBlue[15],
  neutral: palette.groupBlue[24],
  success: palette.green.light,
  warning: palette.orange.light,
  danger: palette.red.light
};

export const infoWrapper =
  'margin: 0.8rem 0; padding-left: .2em; display: flex; flex-direction: column;';

export const inlineBlock = ` display: inline-block`;
export const marginBottom = 'margin-bottom: .8em';

export const listItemStyle = (variant) => {
  return `
    display: flex;
  `;
};

export const labelStyle = (variant) => ({
  height: '2em',
  display: 'inline-flex',
  'align-items': 'center',
  'justify-content': 'center',
  'border-radius': '1em',
  'margin-bottom': '1em',
  padding: '0 .8em',
  background: variantToColorMap[variant],
  color: variant === 'neutral' ? palette.text.dark.blue : palette.text.light.primary
});

export const bulletStyle = (variant) => `
  width: 2em;
  height: 2em;
  box-sizing: border-box;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${variantToMuteColorMap[variant]};
`;

export const lineStyle = (variant) => `
  width: 0px;
  height: auto;
  flex-grow: 1;
  border: 1px dashed ${variantToMuteColorMap[variant]};
`;

export const h3Style = {
  'font-family': 'DFDS-Light, sans-serif',
  'font-size': '2em',
  color: theme.palette.groupBlue.primary,
  margin: '0',
  'line-height': '1.5'
};

export const pStyle = {
  'font-family': 'DFDS-Light, sans-serif',
  'font-size': '2.4em',
  color: theme.palette.groupBlue.primary,
  margin: '0 0 32px 0'
};

export const bold = {
  'font-family': 'DFDS-Bold, sans-serif'
};

export const centerElement = `display:flex;width:100%;justify-content:center;`;
