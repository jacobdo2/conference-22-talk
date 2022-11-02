/** @jsxImportSource solid-js */
import { LitLabel, theme, variantToColorMap } from 'ui';
import { LocationMap } from '../LocationMap';
import { TrackingEvent } from '../mock-data/trackingEventFactory';
import { bulletStyle, infoWrapper, lineStyle, listItemStyle, marginBottom } from '../style';
import './event.css';

const lit = LitLabel;

function getDate(date: Date) {
  const month = date.toLocaleString('en-US', {
    month: 'short'
  });

  return ` ${date.getDate()} ${month} ${date.getFullYear()} `;
}

function ShowDate({ date }: { date: Date }) {
  return (
    <div style={`${marginBottom}; font-size: 1.2em;`}>
      {date.getHours()}:{date.getMinutes()}{' '}
      <span style={`color: ${theme.palette.text.dark.secondary};`}>{getDate(date)}</span>
    </div>
  );
}

function YesIcon({ fill = 'black' }: { fill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6588 3.99194L11.4444 4.77762L5.69824 10.5075L4.91256 9.72178L10.6588 3.99194ZM3.34122 6.57908L5.69824 8.93611L4.91256 9.72178L2.55554 7.36476L3.34122 6.57908Z"
        fill={fill}
      />
    </svg>
  );
}

type EventProps = TrackingEvent & { isFirst: boolean };

export function Event({ description, label, timestamp, variant, location, isFirst }: EventProps) {
  return (
    <li style={listItemStyle(variant)}>
      <div
        style={{
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'margin-right': '1rem'
        }}
      >
        <div style={bulletStyle(variant)}>
          <YesIcon fill={variantToColorMap[variant]} />
        </div>
        <div style={!isFirst && lineStyle(variant)} />
      </div>
      <div
        style={{
          'margin-bottom': '2.4rem'
        }}
      >
        <lit-label variant={variant} label={label}></lit-label>
        <div style={infoWrapper}>
          {description && (
            <span
              style={`
            ${marginBottom};
            font-size: 1.2em;
          `}
            >
              {description}
            </span>
          )}
          <ShowDate date={timestamp} />
          {location && <LocationMap location={location} />}
        </div>
      </div>
    </li>
  );
}
