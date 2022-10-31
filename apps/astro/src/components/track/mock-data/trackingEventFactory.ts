import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';

export enum BookingStatus {
  PENDING = 'Pending',
  PRELIMINARY_BOOKED = 'Preliminary booked',
  BOOKED = 'Booked',
  UNLOADED_FROM_VESSEL = 'Unloaded from vessel',
  CHECKED_IN = 'Checked in',
  UNIT_ON_TERMINAL = 'Unit on terminal',
  LOADED_ONTO_VESSEL = 'Loaded onto vessel',
  RECEIVED_AT_GATE = 'Received at gate',
  RELEASED_FROM_GATE = 'Released from gate',
  GATE_PASS_PRINTED = 'Gate pass printed',
  CHECKED_IN_GATE = 'Checked in gate',
  CANCELLED = 'Cancelled',
  READY_FOR_PICK_UP = 'Ready for pickup',
  READY_FOR_DROP_OFF = 'Ready for drop off',
  ARCHIVED = 'Archived',
  UNKNOWN = 'Unknown',
  UNSAVED = 'Unsaved',
  REQUESTED = 'Requested',
  LOADED = 'Loaded onto vessel'
}

const bookingStatuses = Object.values(BookingStatus).filter(
  (status) => ![BookingStatus.BOOKED, BookingStatus.UNLOADED_FROM_VESSEL].includes(status)
);

const VARIANTS = ['primary', 'neutral', 'success', 'warning', 'danger'] as const;
type Variant = typeof VARIANTS[number];
const HOUR_IN_MS = 3600 * 1000;

export interface TrackingEvent {
  /** Color of the label */
  variant: Variant;

  /** Text of the label e.g. Booked, Unloaded from vessel */
  label: string;

  /** Optional description of the event e.g. Arrived from Dover, Departed from Calais */
  description?: string;

  /** Date and time for every event */
  timestamp: Date;

  // Optional location on Map to display the map
  location?: string;
}

export const trackingEventFactory = Factory.Sync.makeFactory<TrackingEvent>(() => {
  return {
    label: faker.helpers.arrayElement(bookingStatuses),
    variant: faker.helpers.arrayElement(VARIANTS) as Variant,
    timestamp: Factory.each((index) => {
      return new Date(Date.now() + HOUR_IN_MS * index * Number(faker.random.numeric(1)));
    })
  };
});

export const getTrackingEvents = (count: number, destination) => {
  const events = trackingEventFactory.buildList(count);
  const randomCity = faker.address.cityName();
  const startEvent = trackingEventFactory.build({
    label: BookingStatus.BOOKED,
    variant: 'primary',
    location: randomCity,
    description: `Departed from ${randomCity}`
  });
  const capitalizedDestination =
    destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase();
  const endEvent = trackingEventFactory.build({
    location: capitalizedDestination,
    label: BookingStatus.UNLOADED_FROM_VESSEL,
    variant: 'success',
    description: `Arrived at ${capitalizedDestination}`
  });

  // Remove the first and last random event and replace it with
  // Booked as the first and Unloaded from Vessel as the last one

  return [startEvent, ...events.slice(1, -1), endEvent].reverse();
};
