import { theme } from 'ui';
import { TrackingEvent } from './mock-data/trackingEventFactory';

const palette = theme.palette;
const variantToColorMapping: { [k in TrackingEvent['variant']]: string } = {
  primary: palette.groupBlue.primary,
  neutral: palette.groupBlue[24],
  success: palette.green.primary,
  warning: palette.orange.primary,
  danger: palette.red.primary
};
export const infoWrapper =
  'margin: 2rem 0; padding-left: .2rem; display: flex; flex-direction: column;';

export const inlineBlock = ` display: inline-block`;
export const marginBottom = 'margin-bottom: .2rem';

export const listItemStyle = (variant) => `padding-bottom: 1rem;`;

export const labelStyle = (variant) => ({
  'border-radius': '2rem',
  padding: '.2rem 1rem',
  'margin-bottom': '1rem',
  background: variantToColorMapping[variant],
  color: variant === 'neutral' ? palette.text.dark.blue : palette.text.light.primary
});

export const bulletStyle = (variant) => `
  width: 1em;
  ${inlineBlock}
  height: 1em;
  box-sizing: border-box;
  border-radius: 50%;
  z-index: 1;
  margin-right: 1em;
  border: 2px solid ${variantToColorMapping[variant]}
`;
