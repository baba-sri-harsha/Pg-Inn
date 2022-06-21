import { FiltersComponent } from './../filters/filters.component';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayingGuest } from '../../models/paying-guest';
import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-paying-guest-list',
  templateUrl: './paying-guest-list.component.html',
  styleUrls: ['./paying-guest-list.component.css'],
})
export class PayingGuestListComponent implements OnInit, OnChanges {
  @ViewChild(FiltersComponent)
  filtersComponent!: FiltersComponent;

  filter: string = '';
  subfilter: string = '';

  city = '';
  pgList: PayingGuest[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pgService: PgService
  ) {}

  ngOnChanges(): void {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let city = map.get('city');
      if (city) this.city = city;
      this._pgService.getPgByCities(this.city).subscribe({
        next: (data) => {
          this.pgList = data;
        },
      });
    });
    this._activatedRoute.queryParams.subscribe({
      next: (data) => {
        this.filter = data['data'];
        this.subfilter = data['subfilter'];
        this._pgService
          .getPgBySubFilters(this.filter, this.subfilter)
          .subscribe({
            next: (data) => {
              this.pgList = data;
            },
          });
      },
    });
    //     this._pgService.getPgBySubFilters(x, y).subscribe({
    //       next: (data) => {
    //         this.
    //       },
    //     });
    //   },
    // });
  }
}

// this._activatedRoute.queryParamMap.subscribe((map) => {
//   console.log(map.get('gender'));
//   this.pgList.filter((each) => each.pgGender == map.get('gender'));
// });
