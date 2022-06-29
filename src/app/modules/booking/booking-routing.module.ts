import { AuthGuardService } from './../auth/services/auth-guard.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookingComponent } from './components/booking/booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'booking',
    component: BookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
