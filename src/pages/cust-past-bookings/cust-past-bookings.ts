import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustPBookData } from '../../providers/Cust-pastBookingData';
import { CustPastBookingDetailsPage } from '../cust-past-booking-details/cust-past-booking-details';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cust-past-bookings',
  templateUrl: 'cust-past-bookings.html'
})
export class CustPastBookingsPage {
  cPBooks: any;
  hideCard: boolean = false;

  // this tells the tabs component which Pages should be each tab's root Page
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public custPBookData: CustPBookData) {
  }

  ionViewWillEnter(){
    this.cPBooks = this.navParams.get('data');
    this.storage.get('CUSTPBook').then((val) => {
      if (val[0].bookID == 0 || val[0].bookID == null) {
        this.hideCard = true;
      }
      console.log("hideCardStat", this.hideCard);
      this.cPBooks = val;
      console.log("Past", this.cPBooks);
      console.log('Get Customer Ongoing Bookings');
    });
  }

  //to push Booking Details page after selecting on specific bookings
  goToCustPBookDetails(bookItem) {
    this.navCtrl.push(CustPastBookingDetailsPage, {
      data: bookItem
    });
  }
  
}
