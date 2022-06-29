import { BookingModule } from './../booking/booking.module';
import { BookingComponent } from './../booking/components/booking/booking.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PayingGuestRoutingModule } from './paying-guest-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PayingGuestListComponent } from './components/paying-guest-list/paying-guest-list.component';
import { PayingGuestDetailsComponent } from './components/paying-guest-details/paying-guest-details.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    PayingGuestListComponent,
    PayingGuestDetailsComponent,
    FiltersComponent,
  ],

  imports: [CommonModule, MaterialModule, PayingGuestRoutingModule],
  exports: [
    HomeComponent,
    NavBarComponent,
    PayingGuestListComponent,
    PayingGuestDetailsComponent,
    FiltersComponent,
  ],
})
export class PayingGuestModule {}
