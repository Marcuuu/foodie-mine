import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustBookData } from '../../providers/Cust-bookingData';
import { CustBookingDetailsPage } from '../cust-booking-details/cust-booking-details';
import { custBooking } from '../../models/Cust-Bookings';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-cust-ongoing-bookings',
  templateUrl: 'cust-ongoing-bookings.html'
})
export class CustOngoingBookingsPage {
  cBooks: any;
  hideCard: boolean = false;
  custBook: custBooking;
  
  // this tells the tabs component which Pages should be each tab's root Page
  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams, private storage: Storage, public custBookData: CustBookData) {
  }

  ionViewWillEnter() {
    this.getOnBook();
  }

  getOnBook() {
    console.log("entered", "here");
    var url = 'https://foodie1234.herokuapp.com/getCustBookings';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID; 
      bookingID: localStorage.getItem("loginid")
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log('postData:', postData);
      console.log("ongoing", data);
      this.cBooks = data;
    }, error => {
      console.log(error);
    });
  }

  // ionViewWillEnter() {
  //   let id = localStorage.getItem('loginid');
  //   console.log("getcustid", id);
  //   this.storage.get('CUSTBook').then((val) => {
  //     console.log(val);
  //     this.cBooks = val;
  //     for (var i=0;i<this.cBooks.length;i++){ 
  //       if (this.cBooks[i].custID == id){
  //         this.custBook = this.cBooks[i];
  //       }
  //     }
  //     console.log('Get Ongoing Bookings completed');
  //     console.log(this.custBook);
  //   });
  // }

  // ionViewWillEnter(){
  //   this.cBooks = this.navParams.get('data');
  //   this.storage.get('CUSTBook').then((val) => {
  //     if (val[0].bookID == 0 || val[0].bookID == null) {
  //       this.hideCard = true;
  //     }
  //     console.log("hideCardStat", this.hideCard);
  //     this.cBooks = val;
  //     console.log("Ongoing", this.cBooks);
  //     console.log('Get Customer Ongoing Bookings');
  //   });
  // }

  //to push Booking Details page after selecting on specific bookings
  goToCustBookDetails(bookItem) {
    this.navCtrl.push(CustBookingDetailsPage, {
      data: bookItem
    });
  }
  
}
