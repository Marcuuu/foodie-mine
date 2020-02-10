import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-cust-reschedule-booking',
  templateUrl: 'cust-reschedule-booking.html'
})
export class CustRescheduleBookingPage {
  bookItem: any;
  loading: any;
  // this tells the tabs component which Pages should be each tab's root Page
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.bookItem = navParams.get('data');
    console.log(this.bookItem);
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Cancelling'
    });
  }
  
}
