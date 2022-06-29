import { Address } from './../../models/address';
import { FiltersComponent } from './../filters/filters.component';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { PayingGuest } from '../../models/paying-guest';
import { PgService } from '../../services/pg.service';
import {
  pipe,
  map,
  filter,
  combineLatest,
  switchMap,
  Observable,
  withLatestFrom,
} from 'rxjs';
import { query } from '@angular/animations';

type Filter = 'pgGender' | 'rating' | 'category';

@Component({
  selector: 'app-paying-guest-list',
  templateUrl: './paying-guest-list.component.html',
  styleUrls: ['./paying-guest-list.component.css'],
})
export class PayingGuestListComponent implements OnInit {
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

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((map) => {
    //   let city = map.get('city');
    //   if (city) this.city = city;
    //   this._pgService.getPgByCities(this.city).subscribe({
    //     next: (data) => {
    //       this.pgList = data;
    //     },
    //   });
    // });

    //   this._activatedRoute.queryParams.subscribe({
    //     next: (data) => {
    //       this.filter = data['filter'];
    //       this.subfilter = data['subfilter'];
    //       this._pgService
    //         .getPgBySubFilters(this.filter, this.subfilter)
    //         .subscribe({
    //           next: (data) => {
    //             this.pgList = data;
    //           },
    //         });
    //     },
    //   });

    // combineLatest([
    //   this._activatedRoute.paramMap,
    //   this._activatedRoute.queryParams,
    // ])
    //   .pipe(
    //     switchMap(([paramMap, queryParams]): Observable<PayingGuest[]> => {
    //       const filter = queryParams['filter'];
    //       const subFilter = queryParams['subFilter'];
    //       const city: any = paramMap.get('city');
    //       if (!!filter && subFilter) {
    //         return this._pgService.getPgByCities()
    //       } else {
    //         return this._pgService.getPgByCities(city);
    //       }
    //     })
    //   )
    //   .subscribe((data: PayingGuest[]) => (this.pgList = data));

    this._activatedRoute.paramMap
      .pipe(
        filter((paramMap: ParamMap) => {
          let city = paramMap.get('city');
          return !!city;
        }),
        map((paramMap: ParamMap) => {
          let city = paramMap.get('city');
          if (city) {
            this.city = city;
          }
          return city;
        }),
        switchMap((city: string | null) => {
          return this._pgService.getPgByCities(city);
        }),
        withLatestFrom(this._activatedRoute.queryParams),
        map(([pgList, queryParams]: [PayingGuest[], Params]) => {
          const filter: Filter = queryParams['filter']; //gender
          const subFilter = queryParams['subFilter']; //male
          if (!filter || !subFilter) {
            return pgList;
          }
          return pgList.filter((pgDetails) => {
            const filterData = pgDetails[filter];
            return filterData === subFilter;
          });
        })
      )
      .subscribe((pgList) => {
        this.pgList = pgList;
      });
  }
}
