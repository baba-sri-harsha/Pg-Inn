import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router, private _pgService: PgService) {}

  cities!: string[];

  ngOnInit(): void {
    this._pgService.getDistinctCities().subscribe({
      next: (data) => (this.cities = data),
    });
  }

  getPgByCity = (city: string) => {
    this._router.navigate(['pg-city/' + city]);
  };
}
