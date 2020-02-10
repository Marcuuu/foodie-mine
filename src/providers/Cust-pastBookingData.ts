import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { custBooking } from '../models/Cust-Bookings';
import { Storage } from '@ionic/storage';

@Injectable()
export class CustPBookData {
    result: any;
    data: Observable<any>;

    constructor(private http: HttpClient, private storage: Storage) {}

    getPBookData(){
      console.log("In /getCustPastBookings");
      var url = 'https://foodie1234.herokuapp.com/getCustPastBookings';
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
        let custPBook = [];
        console.log("In /getCustBookings");
        this.result = data;
        for(var i = 0; i < this.result.length; i++){
          custPBook.push(new custBooking(
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
        this.storage.remove('CUSTPBook');
        this.storage.set('CUSTPBook', custPBook);
      });
    }
}
