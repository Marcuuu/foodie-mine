import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "page-make-booking",
  templateUrl: "make-booking.html"
})
export class MakeBookingPage {
  bookingDetails: any;
  date: any;
  bookingData: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private alertCtrl: AlertController
  ) {
    this.bookingDetails = navParams.get("item");
  }

  ionViewDidLoad() {
    localStorage.setItem("name", this.bookingDetails.fName)
    console.log(this.bookingDetails);
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

  noDate() {
    let alert = this.alertCtrl.create({
      title: 'Booking date cannot be empty',
      message: 'Please select a date!',
      buttons: ['Ok']
    })
    alert.present()
  }

  noTime() {
    let alert = this.alertCtrl.create({
      title: 'Booking time cannot be empty',
      message: 'Please select a time!',
      buttons: ['Ok']
    })
    alert.present()
  }

  noPax() {
    let alert = this.alertCtrl.create({
      title: 'Pax cannot be empty',
      message: 'Please select the number of people!',
      buttons: ['Ok']
    })
    alert.present()
  }

  bookingSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Booking successful!',
      message: 'See you soon!',
      buttons: ['Ok']
    })
    alert.present()
  }

  makeBooking() {
    var url = "https://foodie1234.herokuapp.com/makeBooking";
    let bookDate = localStorage.getItem("bookDate")
    let bookTime = localStorage.getItem("bookTime")
    let bookPax = localStorage.getItem("bookPax")
    if (bookDate == null) {
      this.noDate()
    }
    else if (bookTime == null) {
      this.noTime()
    }
    else if (bookPax == null) {
      this.noPax()
    }
    else {
      var postData = JSON.stringify({
        //these fields MUST match the server.js request.body.XXX;
        bookDate: localStorage.getItem("bookDate"),
        bookTime: localStorage.getItem("bookTime"),
        bookPax: localStorage.getItem("bookPax"),
        bookNotes: localStorage.getItem("bookNotes"),
        custID: localStorage.getItem("loginid"),
        menuID: this.bookingDetails.menuId,
        pdpID: this.bookingDetails.pdp_id
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
      localStorage.removeItem("bookDate")
      localStorage.removeItem("bookTime")
      localStorage.removeItem("bookPax")
      localStorage.removeItem("bookNotes")
      this.bookingSuccess()
      this.navCtrl.pop();
    }
  }

  cancelBooking() {
    this.navCtrl.pop();
  }
}
