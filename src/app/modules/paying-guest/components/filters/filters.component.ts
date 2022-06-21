import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayingGuest } from '../../models/paying-guest';

import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  pgColumns: string[] = [];

  payingGuest: PayingGuest = {
    payingGuestId: 0,
    name: '',
    pgGender: '',
    category: '',
    rating: 0,
    address: {
      addressId: 0,
      doorNumber: '',
      streetNAme: '',
      landMark: '',
      city: '',
      state: '',
      country: '',
    },
    rooms: [],
    bookings: [],
  };

  filters: string[] = Object.keys(this.payingGuest);

  subFilters: string[] = [];

  constructor(private _pgService: PgService, private _router: Router) {}

  ngOnInit(): void {
    this.filters.forEach((filter) => {
      if (filter == 'pgGender' || filter == 'rating' || filter == 'category') {
        this.pgColumns.push(filter);
      }
    });
  }

  getSubFilters = (filter: string) => {
    this._pgService.getSubfilters(filter).subscribe({
      next: (data) => {
        this.subFilters = data;
      },
    });
  };

  sort = (data: string, subfilter: string) => {
    this._router.navigate(['/pg-details'], {
      queryParams: { data, subfilter },
    });
  };

  // onGenderClick = () => {
  //   this._router.navigateByUrl('/pg-city/chennai?gender=MALE');
  // };
}
