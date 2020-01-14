import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingDetailsPage } from '../booking-details/booking-details';
import { BookingsData } from '../../providers/bookingData';
import { Booking } from '../../models/Bookings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html'
})
export class BookingsPage {
  bookings: Booking[];
  
  constructor(public navCtrl: NavController, private storage: Storage, public bookingData: BookingsData) {

    storage.get('Bookings').then((val) => {
      this.bookings = val;
      console.log('Get Bookings completed');
    });
  }
  goToBookingDetails(booking){
    this.navCtrl.push(BookingDetailsPage, {
      data: booking
    });
  }
}
