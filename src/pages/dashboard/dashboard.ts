import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BookingDetailsPage } from '../booking-details/booking-details';
import { BookingsData } from '../../providers/bookingData';
import { Booking } from '../../models/dashboardBookings';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  errorMessage: string;
  bookings: any;
  loading: any;
  // bookings: any[];

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: HttpClient) {

    // this.bookingsData.getDashboardBookings()
    // .subscribe(
    //   data => this.bookings = data,
    //   error => this.errorMessage = JSON.stringify(error)
    // );

    this.loading = this.loadingCtrl.create({
      content: `
      <ion-spinner ></ion-spinner>`
    });
 
    this.getdata();
  }

  getdata(){
    this.loading.present();
    this.http.get('https://foodie1234.herokuapp.com/getPDPDashboard').subscribe(
      result => {
        this.bookings=result; 
        console.log("Success : "+this.bookings); 
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        this.loading.dismiss();
        console.log('getData completed');
      }
    );
  }

  goToBookingDetails(params){
    if (!params) params = {};
    this.navCtrl.push(BookingDetailsPage);
  }
}
