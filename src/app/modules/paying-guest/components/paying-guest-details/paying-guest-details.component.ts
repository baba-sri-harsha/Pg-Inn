import { PayingGuest } from './../../models/paying-guest';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PgService } from '../../services/pg.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-paying-guest-details',
  templateUrl: './paying-guest-details.component.html',
  styleUrls: ['./paying-guest-details.component.css'],
})
export class PayingGuestDetailsComponent implements OnInit {
  payingGuestId!: number;
  payingGuest!: PayingGuest;

  constructor(
    private _pgService: PgService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((map) => {
    //   let id = map.get('id');
    //   if (id) this.payingGuestId = parseInt(id);
    //   console.log(this.payingGuestId);
    //   this._pgService.getPgById(this.payingGuestId).subscribe({
    //     next: (data) => {
    //       this.payingGuest = data;
    //     },
    //   });
    // });

    this._activatedRoute.paramMap
      .pipe(
        switchMap((data: ParamMap) => {
          let id = data.get('id');
          if (id) this.payingGuestId = parseInt(id);
          return this._pgService.getPgById(this.payingGuestId);
        })
      )
      .subscribe((data: PayingGuest) => {
        this.payingGuest = data;
      });
  }
}
