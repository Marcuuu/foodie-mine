import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../models/PDP-Bookings';
import { Storage } from '@ionic/storage';

@Injectable()
export class DashboardData {
    result: any;
    data: Observable<any>;

    constructor(private http: HttpClient, private storage: Storage) {}

    getDashboardData(){
      let booking = [];
      console.log("In /getBookingsDashboard");
      var url = 'https://foodie1234.herokuapp.com/getBookingsDashboard';
      this.data = this.http.get(url);
      this.data.subscribe(data => {
      this.result = data;
      for(var i = 0; i < this.result.length; i++){
        booking.push(new Booking(
          this.result[i].bookID,
          this.result[i].custImage,
          this.result[i].custName,
          this.result[i].bookDate,
          this.result[i].bookTime,
          this.result[i].bookPax,
          this.result[i].bookNotes,
          this.result[i].bookStatus,
         ));
        }
        this.storage.set('Dashboard', booking);
      });
    }
}
