import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './components/booking/booking.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BookingRoutingModule,
  ],
  exports: [BookingComponent],
})
export class BookingModule {}
