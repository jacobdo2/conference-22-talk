/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { createResource, For, Match, Switch } from 'solid-js';
import { trackingFormStore } from '../stores';
enum EventStatus {
  LOADED = 'loaded'
}

const data: Record<string, { eventStatus: EventStatus; port?: string }[]> = {
  '1': [{ eventStatus: EventStatus.LOADED, port: 'Dover' }]
};

function fetchRouteData({ shippingReference }): Promise<typeof data['1']> {
  console.log(shippingReference);
  return new Promise((resolve) => setTimeout(() => resolve(data[shippingReference]), 1000));
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
          <For each={routeData()}>{(trackingEvent) => <p>{trackingEvent.port}</p>}</For>
        </Match>
      </Switch>
    </div>
  );
}
