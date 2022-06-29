import { Customer } from './customer';
import { PayingGuest } from './paying-guest';
export interface Booking {
  bookingTime?: Date;
  fromDate: Date;
  toDate: Date;
  status: string;
  roomShare: string;
}
