import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';

export enum BookingStatus {
  PENDING = 'Pending',
  PRELIMINARY_BOOKED = 'PreliminaryBooked',
  BOOKED = 'Booked',
  UNLOADED_FROM_VESSEL = 'UnloadedFromVessel',
  CHECKED_IN = 'CheckedIn',
  UNIT_ON_TERMINAL = 'UnitOnTerminal',
  LOADED_ONTO_VESSEL = 'LoadedOntoVessel',
  RECEIVED_AT_GATE = 'ReceivedAtGate',
  RELEASED_FROM_GATE = 'ReleasedFromGate',
  GATE_PASS_PRINTED = 'GatePassPrinted',
  CHECKED_IN_GATE = 'CheckedInGate',
  CANCELLED = 'Cancelled',
  READY_FOR_PICK_UP = 'ReadyForPickUp',
  READY_FOR_DROP_OFF = 'ReadyForDropOff',
  ARCHIVED = 'Archived',
  UNKNOWN = 'Unknown',
  UNSAVED = 'Unsaved',
  REQUESTED = 'Requested'
}

const bookingStatuses = Object.values(BookingStatus);

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
  const startEvent = trackingEventFactory.build({ label: BookingStatus.BOOKED });

  // Remove the first and last random event and replace it with
  // Booked as the first and Unloaded from Vessel as the last one
  return [
    startEvent,
    ...events.slice(1, -1),
    trackingEventFactory.build({ location: destination, label: BookingStatus.UNLOADED_FROM_VESSEL })
  ];
};
