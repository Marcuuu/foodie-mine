import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingDetailsPage } from '../PDP-booking-details/PDP-booking-details';
import { BookingsData } from '../../providers/PDP-bookingData';
import { Booking } from '../../models/PDP-Bookings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-PDP-bookings',
  templateUrl: 'PDP-bookings.html'
})
export class BookingsPage {
  bookings: Booking[];
  default = {option:null};
  filterBookings: any;
  
  constructor(public navCtrl: NavController, private storage: Storage, public bookingData: BookingsData) {
    storage.get('Bookings').then((val) => {
      this.bookings = val;
      console.log('Get Bookings completed');
      this.filterBookings = this.bookings;
      console.log(this.filterBookings);
    });
    this.default.option = "none";
  }

  bookingsFilter($ev){
    console.log($ev);
    if ($ev == "ongoing")
      this.filterBookings = this.bookings.filter(val => val.bookStatus.toLowerCase() == "ongoing");
    else if ($ev == "completed")
      this.filterBookings = this.bookings.filter(val => val.bookStatus.toLowerCase() == "completed");
    else if ($ev == "cancelled")
      this.filterBookings = this.bookings.filter(val => val.bookStatus.toLowerCase() == "cancelled");
    else
      this.filterBookings = this.bookings;
    console.log(this.filterBookings);
  }

  goToBookingDetails(booking){
    this.navCtrl.push(BookingDetailsPage, {
      data: booking
    });
  }
}
