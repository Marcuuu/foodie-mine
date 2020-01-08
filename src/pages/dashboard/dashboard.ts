import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingDetailsPage } from '../booking-details/booking-details';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToBookingDetails(params){
    if (!params) params = {};
    this.navCtrl.push(BookingDetailsPage);
  }
}
