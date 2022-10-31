import { atom } from 'nanostores';

export interface TrackingParams {
  shippingReference: string;
  destination: string;
}

const trackingFormStore = atom<TrackingParams>();

export default trackingFormStore;
