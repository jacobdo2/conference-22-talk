/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { createResource, For, Match, Switch } from 'solid-js';
import { trackingFormStore } from '../../stores';
import { getTrackingEvents } from './mock-data';
import { TrackingEvent } from './mock-data/trackingEventFactory';

function fetchRouteData({ shippingReference }): Promise<TrackingEvent[]> {
  const events = getTrackingEvents(7, 'Riga');
  return new Promise((resolve) => setTimeout(() => resolve(events), 1000));
}

export function Tracking() {
  const s = useStore(trackingFormStore);
  const [routeData] = createResource(s, fetchRouteData);

  return (
    <div style={{ padding: '2rem' }}>
      <h3>Shipment Reference</h3>
      <h3>{s()?.shippingReference || 'Please select a shipment'}</h3>
      <Switch>
        <Match when={routeData.error}>
          <h3>Error {JSON.stringify(routeData)}</h3>;
        </Match>
        <Match when={routeData.loading}>
          <p>Loading....</p>
        </Match>
        <Match when={true}>
          <For each={routeData()}>{(trackingEvent) => <p>{trackingEvent.label}</p>}</For>
        </Match>
      </Switch>
    </div>
  );
}
