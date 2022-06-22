import { RegisterComponent } from './../auth/components/register/register.component';
import { AuthGuardService } from './../auth/services/auth-guard.service';
import { BookingComponent } from './../booking/components/booking/booking.component';
import { PayingGuestDetailsComponent } from './components/paying-guest-details/paying-guest-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PayingGuestListComponent } from './components/paying-guest-list/paying-guest-list.component';
import { PgService } from './services/pg.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pg-city/:city', component: PayingGuestListComponent },
  { path: 'pg-details', component: PayingGuestListComponent },
  { path: 'pg-list', component: PayingGuestListComponent },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'pg-details/:id', component: PayingGuestDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PgService],
  exports: [RouterModule],
})
export class PayingGuestRoutingModule {}
