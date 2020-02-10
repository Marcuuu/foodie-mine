import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { custBooking } from '../models/Cust-Bookings';
import { Storage } from '@ionic/storage';

@Injectable()
export class CustBookData {
    result: any;
    data: Observable<any>;

    constructor(private http: HttpClient, private storage: Storage) {}

    getBookData(){
      console.log("In /getCustBookings");
      var url = 'https://foodie1234.herokuapp.com/getCustBookings';
      var postData = JSON.stringify({
        // post data MUSt match the request.body.userID; 
        custId: localStorage.getItem("loginid")
      });

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
        })
      };
      
      this.http.post(url, postData, httpOptions).subscribe((data) => {        
        let custBook = [];
        console.log("In /getCustBookings");
        this.result = data;
        for(var i = 0; i < this.result.length; i++){
          custBook.push(new custBooking(
            this.result[i].bookID,
            this.result[i].fName,
            this.result[i].img,
            this.result[i].location,
            this.result[i].phone,
            this.result[i].email,
            this.result[i].bookDate,
            this.result[i].bookTime,
            this.result[i].bookPax,
            this.result[i].bookNotes,
            this.result[i].bookStatus,
            this.result[i].menu_image,
            this.result[i].custID
           ));
          }
          console.log("test", data);
        this.storage.remove('CUSTBook');
        this.storage.set('CUSTBook', custBook);
      });
    }
}
