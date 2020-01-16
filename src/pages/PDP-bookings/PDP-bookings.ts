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
  
  constructor(public navCtrl: NavController, private storage: Storage, public bookingData: BookingsData) {
    storage.get('Bookings').then((val) => {
      this.bookings = val;
      console.log('Get Bookings completed');
    });

    this.default.option = "none";
  }

  bookingsFilter($ev){
    console.log($ev);
    for (var i=0; i<this.bookings.length; i++){
      if ($ev == )
    }
  }

  goToBookingDetails(booking){
    this.navCtrl.push(BookingDetailsPage, {
      data: booking
    });
  }
}
