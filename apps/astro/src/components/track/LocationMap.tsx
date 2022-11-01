/** @jsxImportSource solid-js */

import { Component, createResource, Match, Switch } from 'solid-js';
import MapGL from 'solid-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type Props = {
  /** City or other location that can be geocoded */
  location: string;
};

const fetchLocationCoords = async (location: string) => {
  const resp = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${
      import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN
    }`
  );

  const geocodedData = await resp.json();

  return geocodedData.features[0].center;
};

export const LocationMap: Component<Props> = ({ location }) => {
  const [coords] = createResource(location, fetchLocationCoords);

  return (
    <Switch>
      <Match when={coords.loading}>
        <p>Loading....</p>
      </Match>
      <Match when={true}>
        <MapGL
          style={{
            height: '15em',
            width: '40em',
            'border-radius': '16px'
          }}
          options={{
            accessToken: import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN,
            style: 'mapbox://styles/jacobdo/cl9y3ntdt005f14rhjzzxzwya',
            interactive: false,
            attributionControl: false
          }}
          viewport={{
            center: coords(),
            zoom: 11
          }}
        ></MapGL>
      </Match>
    </Switch>
  );
};
