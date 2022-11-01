/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { createResource, For, Match, Switch } from 'solid-js';
import { theme } from 'ui';
import { trackingFormStore } from '../../stores';
import { TrackingParams } from '../../stores/trackingFormStore';
import { Event } from './Event';
import { getTrackingEvents } from './mock-data';
import { TrackingEvent } from './mock-data/trackingEventFactory';

const trackingContainerStyle = {
  display: 'grid',
  'grid-template-columns': `minmax(auto, ${theme.sizing.containerWidth}px)`,
  'justify-content': 'center',
  'font-size': '12px',
  'margin-top': '72px'
};

function fetchRouteData({ destination }: TrackingParams): Promise<TrackingEvent[]> {
  const events = getTrackingEvents(7, destination);
  return new Promise((resolve) => setTimeout(() => resolve(events), 1000));
}

export function Tracking() {
  const trackingStore = useStore(trackingFormStore);
  const [routeData] = createResource(trackingStore, fetchRouteData);

  return (
    <main style={trackingContainerStyle}>
      <Switch>
        <Match when={routeData.error}>
          <h3>Error {JSON.stringify(routeData)}</h3>;
        </Match>
        <Match when={routeData.loading}>
          <p>Loading....</p>
        </Match>
        <Match when={!!routeData()}>
          <h3
            style={{
              'font-family': 'DFDS-Light, sans-serif',
              'font-size': '2em',
              color: theme.palette.groupBlue.primary,
              margin: '0',
              'line-height': '1.5'
            }}
          >
            Shipment Reference
          </h3>
          <p
            style={{
              'font-family': 'DFDS-Light, sans-serif',
              'font-size': '2.4em',
              color: theme.palette.groupBlue.primary,
              margin: '0 0 32px 0'
            }}
          >
            #{' '}
            <span
              style={{
                'font-family': 'DFDS-Bold, sans-serif'
              }}
            >
              {trackingStore().shipmentReference}
            </span>
          </p>
          <ul
            ref={(element) => {
              element.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={`padding: 1em 0 0; margin: 0; list-style: none; position: relative;`}
          >
            <For each={routeData()}>
              {(trackingEvent, index) => (
                <Event {...trackingEvent} isFirst={index() === routeData().length - 1} />
              )}
            </For>
          </ul>
        </Match>
      </Switch>
    </main>
  );
}
