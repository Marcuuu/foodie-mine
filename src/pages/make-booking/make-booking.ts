import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "page-make-booking",
  templateUrl: "make-booking.html"
})
export class MakeBookingPage {
  bookingDetails: any;
  date: any;
  bookingData: any;

  noBookTime = false;
  noBookPax = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private alertCtrl: AlertController
  ) {
    this.bookingDetails = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log(this.bookingDetails.fName);
    this.date = new Date().toISOString();
  }

  updateMyDate($event) {
    const year: number = $event.year;
    const month: number = $event.month;
    const day: number = $event.day;
    const full: any = year + "-" + month + "-" + day;
    localStorage.setItem("bookDate", full);
  }

  updateMyTime($event) {
    localStorage.setItem("bookTime", $event);
  }

  updateMyPax($event) {
    localStorage.setItem("bookPax", $event);
  }

  updateMyNotes($event) {
    localStorage.setItem("bookNotes", $event);
  }

  emptyBookTime() {
    let alert = this.alertCtrl.create({
      title: "Select a time",
      message: "Timeslot cannot be empty",
      buttons: ["Ok"]
    });
    alert.present();
  }

  emptyBookPax() {
    let alert = this.alertCtrl.create({
      title: "Select number of pax",
      message: "Pax cannot be empty",
      buttons: ["Ok"]
    });
    alert.present();
  }

  bookingSuccess() {
    let alert = this.alertCtrl.create({
      title: "Booking Successful",
      message: "See you soon!",
      buttons: ["Ok"]
    });
    alert.present();
  }

  makeBooking() {
    var url = "https://elp-tutorial.herokuapp.com/makeBooking";
    var bookTime = localStorage.getItem("bookTime");
    var bookPax = localStorage.getItem("bookPax");

    if (bookTime == null) {
      this.emptyBookTime();
    } else if (bookPax == null) {
      this.emptyBookPax();
    } else {
      console.log("Booking...");
      var postData = JSON.stringify({
        //these fields MUST match the server.js request.body.XXX;
        bookDate: localStorage.getItem("bookDate"),
        bookTime: localStorage.getItem("bookTime"),
        bookPax: localStorage.getItem("bookPax"),
        bookNotes: localStorage.getItem("bookNotes"),
        name: this.bookingDetails.fName,
        menuID: this.bookingDetails.menuId
      });
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
        })
      };
      this.http.post(url, postData, httpOptions).subscribe(
        data => {
          console.log("postData:", postData);
          console.log(data);
          this.bookingData = data;
        },
        error => {
          console.log(error);
        }
      );
      localStorage.removeItem("bookDate");
      localStorage.removeItem("bookTime");
      localStorage.removeItem("bookPax");
      localStorage.removeItem("bookNotes");
      this.navCtrl.pop();
      this.bookingSuccess();
    }
  }

  cancelBooking() {
    this.navCtrl.pop();
  }
}
