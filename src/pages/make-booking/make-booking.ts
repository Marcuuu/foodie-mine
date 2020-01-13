import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-make-booking",
  templateUrl: "make-booking.html"
})
export class MakeBookingPage {
  bookingDetails: any;
  date: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bookingDetails = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log(this.bookingDetails);
    this.date = new Date().toISOString();
  }

  cancelBooking() {
    this.navCtrl.pop();
  }
}
