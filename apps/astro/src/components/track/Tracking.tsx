/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { createResource, For, Match, Switch } from 'solid-js';
import { trackingFormStore } from '../../stores';
import { TrackingParams } from '../../stores/trackingFormStore';
import { Event } from './Event';
import { getTrackingEvents } from './mock-data';
import { TrackingEvent } from './mock-data/trackingEventFactory';

function fetchRouteData({ destination }: TrackingParams): Promise<TrackingEvent[]> {
  const events = getTrackingEvents(7, destination);
  return new Promise((resolve) => setTimeout(() => resolve(events), 1000));
}

export function Tracking() {
  const trackingStore = useStore(trackingFormStore);
  const [routeData] = createResource(trackingStore, fetchRouteData);

  return (
    <div style={{ padding: '2rem' }}>
      <h3>Shipment Reference</h3>
      <h3>{trackingStore()?.shippingReference || 'Please select a shipment'}</h3>
      <Switch>
        <Match when={routeData.error}>
          <h3>Error {JSON.stringify(routeData)}</h3>;
        </Match>
        <Match when={routeData.loading}>
          <p>Loading....</p>
        </Match>
        <Match when={true}>
          <ul style={`padding: 1rem 0 0 2rem; margin: 0; list-style: none; position: relative;`}>
            <For each={routeData()}>{(trackingEvent) => <Event {...trackingEvent} />}</For>
          </ul>
        </Match>
      </Switch>
    </div>
  );
}
