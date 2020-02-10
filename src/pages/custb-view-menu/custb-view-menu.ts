import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustRescheduleBookingPage } from '../cust-reschedule-booking/cust-reschedule-booking';

@Component({
  selector: 'page-custb-view-menu',
  templateUrl: 'custb-view-menu.html'
})
export class CustbViewMenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToRescheduleBooking(params){
    if (!params) params = {};
    this.navCtrl.push(CustRescheduleBookingPage);
  }
}