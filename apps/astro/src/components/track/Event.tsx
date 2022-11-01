/** @jsxImportSource solid-js */
import { theme } from 'ui';
import { TrackingEvent } from './mock-data/trackingEventFactory';
import { infoWrapper, inlineBlock, labelStyle, listItemStyle, marginBottom } from './style';
import './test.css';

function getDate(date: Date) {
  const month = date.toLocaleString('en-US', {
    month: 'short'
  });

  return ` ${date.getDate()} ${month} ${date.getFullYear()} `;
}

function ShowDate({ date }: { date: Date }) {
  return (
    <span>
      {date.getHours()}:{date.getMinutes()}{' '}
      <span style={`color: ${theme.palette.text.dark.secondary}`}>{getDate(date)}</span>
    </span>
  );
}

export function Event({ description, label, timestamp, variant }: TrackingEvent) {
  return (
    <li style={listItemStyle(variant)}>
      <div class={`line ${variant}`}></div>
      <div style={inlineBlock}>
        <span style={labelStyle(variant)}>{label}</span>
        <div style={infoWrapper}>
          {description && <span style={marginBottom}>{description}</span>}
          <ShowDate date={timestamp} />
        </div>
      </div>
    </li>
  );
}
