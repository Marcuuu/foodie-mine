import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "page-make-booking",
  templateUrl: "make-booking.html"
})
export class MakeBookingPage {
  bookingDetails: any;
  date: any;
  bookingData: any;
  bookingSuccess = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.bookingDetails = navParams.get("item");
  }

  ionViewDidLoad() {
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

  // makeBooking() {
  //   var url = "https://elp-tutorial.herokuapp.com/makeBooking";
  //   this.data = this.http.get(url);
  //   this.subscription = this.data.subscribe(data => {
  //     this.profileList = data;
  //   });
  // }

  makeBooking() {
    var url = "https://elp-tutorial.herokuapp.com/makeBooking";
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;
      bookDate: localStorage.getItem("bookDate"),
      bookTime: localStorage.getItem("bookTime"),
      bookPax: localStorage.getItem("bookPax"),
      bookNotes: localStorage.getItem("bookNotes")
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
    this.navCtrl.pop();
    this.bookingSuccess = !this.bookingSuccess;
  }

  cancelBooking() {
    this.navCtrl.pop();
  }
}
