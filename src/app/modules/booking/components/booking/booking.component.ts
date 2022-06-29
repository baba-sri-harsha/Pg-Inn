import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Booking } from 'src/app/modules/paying-guest/models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  showId!: number;

  bookingDetails: any;
  bookingForm!: FormGroup;
  constructor(private _bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
      roomShare: new FormControl(),
    });
  }

  sumbitForm = (bookingForm: FormGroup) => {
    let booking = bookingForm.value;
    booking.status = 'ACTIVE';
    console.log(booking);
    this._bookingService.bookPg(booking).subscribe({
      next: (data) => (this.bookingDetails = data),
    });
  };
}
