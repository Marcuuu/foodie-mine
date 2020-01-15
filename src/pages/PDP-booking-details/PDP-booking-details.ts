import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-PDP-booking-details',
  templateUrl: 'PDP-booking-details.html'
})

export class BookingDetailsPage {
  booking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.booking = navParams.get('data');
  }  
}
