import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { DashboardData } from '../../providers/PDP-dashboardData';
import { BookingsData } from '../../providers/PDP-bookingData';

@Component({
  selector: 'page-PDP-booking-details',
  templateUrl: 'PDP-booking-details.html'
})

export class BookingDetailsPage {
  booking: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public dashboardData: DashboardData, public bookingData: BookingsData) {
    this.booking = navParams.get('data');
    console.log(this.booking);
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Cancelling'
    });
  }

  bookingStatus(){
    return this.booking.bookStatus.toLowerCase() == "ongoing".toLowerCase();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm cancellation',
      message: 'Do you want to cancel this booking?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.cancelBooking();
            this.loading.present();
            console.log('Yes');
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Booking has been cancelled',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  cancelBooking(){
    var url = 'https://foodie1234.herokuapp.com/cancelBooking';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID; 
      bookingID: this.booking.bookID
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log("In /cancelBooking");
      console.log('postData:', postData);
      this.loading.dismiss();
      this.presentAlert();
      this.booking.bookStatus = "Cancelled";
      this.dashboardData.getDashboardData();
      this.bookingData.getBookingsData();
    });
  }
}
