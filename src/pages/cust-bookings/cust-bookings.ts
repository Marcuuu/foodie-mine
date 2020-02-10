import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustOngoingBookingsPage } from '../cust-ongoing-bookings/cust-ongoing-bookings';
import { CustPastBookingsPage } from '../cust-past-bookings/cust-past-bookings';
import { CustBookData } from '../../providers/Cust-bookingData';

@Component({
  selector: 'page-cust-bookings',
  templateUrl: 'cust-bookings.html'
})
export class CustBookingsPage {
  // this tells the tabs component which Pages should be each tab's root Page
  constructor(public navCtrl: NavController, public custBookData: CustBookData) {
  }

  goToCOnBook(custBook){
    this.navCtrl.push(CustOngoingBookingsPage, {
      data: custBook
    });
  }

  goToCPBook(custPBook){
    this.navCtrl.push(CustPastBookingsPage, {
      data: custPBook
    });
  }
  
}
