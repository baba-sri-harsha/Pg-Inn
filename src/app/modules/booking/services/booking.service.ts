import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Booking } from './../../paying-guest/models/booking';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _baseUrl = `http://localhost:8080/booking-api/add-booking/payingGuestId/1/customerId/1`;

  constructor(private _httpClient: HttpClient) {}

  bookPg = (booking: Booking): Observable<void> => {
    let url = this._baseUrl;
    return this._httpClient.post<void>(url, booking);
  };
}
