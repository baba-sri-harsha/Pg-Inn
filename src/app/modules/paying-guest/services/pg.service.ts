import { PayingGuest } from './../models/paying-guest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PgService {
  private _baseUrl = 'http://localhost:8080/paying-guest-api/paying-guests/';

  constructor(private _httpClient: HttpClient) {}

  getDistinctCities = (): Observable<string[]> => {
    return this._httpClient.get<string[]>(this._baseUrl + 'distinct-city');
  };

  getPgByCities = (city: string | null): Observable<PayingGuest[]> => {
    if (!city) return of([]);
    return this._httpClient.get<PayingGuest[]>(
      this._baseUrl.concat('city/', city)
    );
  };

  getPgById = (payingGuestId: number): Observable<PayingGuest> => {
    let url = this._baseUrl.concat('payingGuestId/', `${payingGuestId}`);
    return this._httpClient.get<PayingGuest>(url);
  };

  getSubfilters = (filter: string): Observable<string[]> => {
    let url = this._baseUrl.concat(`distinct-filter/${filter}`);
    return this._httpClient.get<string[]>(url);
  };

  getPgBySubFilters = (
    filter: string,
    subFilter: string
  ): Observable<PayingGuest[]> => {
    let url = `http://localhost:8080/paying-guest-api/paying-guests/choice?filter=${filter}&subFilter=${subFilter}`;
    return this._httpClient.get<PayingGuest[]>(url);
  };
}
