import { Component, Input } from '@angular/core';
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
  @Input() bookings: any;
  loading: any;
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  today = new Date().getDate()+"/"+new Date().getMonth()+1+"/"+new Date().getFullYear();
  tomorrow = new Date().getDate()+1+"/"+new Date().getMonth()+1+"/"+new Date().getFullYear();
  todayDate = this.dateOrdinal(new Date().getDate());
  tomorrowDate = this.dateOrdinal(new Date().getDate()+1);
  monthDate = this.monthNames[new Date().getMonth()];
  dateOrdinal(date) {
    return date+(31==date||21==date||1==date?"st":22==date||2==date?"nd":23==date||3==date?"rd":"th")
  };
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
