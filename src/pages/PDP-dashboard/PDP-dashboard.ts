import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingDetailsPage } from '../PDP-booking-details/PDP-booking-details';
import { Booking } from '../../models/PDP-Bookings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-PDP-dashboard',
  templateUrl: 'PDP-dashboard.html'
})
export class DashboardPage {
  bookings: Booking[];

  constructor(public navCtrl: NavController, private storage: Storage) {}

  ionViewWillEnter(){
    this.storage.get('Dashboard').then((val) => {
      console.log(val);
      this.bookings = val;
      console.log('Get Dashboard completed');
    });
  }

  goToBookingDetails(booking){
    this.navCtrl.push(BookingDetailsPage, {
      data: booking
    });
  }
}
