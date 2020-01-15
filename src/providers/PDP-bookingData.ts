import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../models/PDP-Bookings';
import { Storage } from '@ionic/storage';

@Injectable()
export class BookingsData {
    result: any;
    data: Observable<any>;

    constructor(private http: HttpClient, private storage: Storage) {
      let booking = [];
      console.log("In /getBookings");
      var url = 'https://foodie1234.herokuapp.com/getBookings';
      this.data = this.http.get(url);
      this.data.subscribe(data => {
      this.result = data;
      for(var i = 0; i < this.result.length; i++){
        booking.push(new Booking(
          this.result[i].custName,
          this.result[i].bookDate,
          this.result[i].bookTime,
          this.result[i].bookPax,
          this.result[i].bookNotes,
         ));
        }
        storage.set('Bookings', booking);
      });
    }
}
