/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid';
import { createResource, For, Match, Switch } from 'solid-js';
import { theme } from 'ui';
import { trackingFormStore } from '../../stores';
import { TrackingParams } from '../../stores/trackingFormStore';
import { Event } from './Event/Event';
import { Loading } from './Loading/Loading';
import { getTrackingEvents } from './mock-data';
import { TrackingEvent } from './mock-data/trackingEventFactory';
import { bold, centerElement, h3Style, pStyle } from './style';

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
          <div style={centerElement}>
            <Loading></Loading>
          </div>
        </Match>
        <Match when={!!routeData()}>
          <h3 style={h3Style}>Shipment Reference</h3>
          <p style={pStyle}>
            # <span style={bold}>{trackingStore().shipmentReference}</span>
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
