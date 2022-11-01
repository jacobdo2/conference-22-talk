import { atom } from 'nanostores';

export interface TrackingParams {
  shipmentReference: string;
  destination: string;
}

const trackingFormStore = atom<TrackingParams>();

export default trackingFormStore;
