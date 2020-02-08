import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SubmitReview } from '../models/CUST-SubmitReview';
import { Storage } from '@ionic/storage';

@Injectable()
export class SubmitReviewData {
    result: any;
    data: Observable<any>;

    constructor(private http: HttpClient, private storage: Storage) {}

    getSubmitReviewData(){
      let submit = [];
      console.log("In /getMenuName");
      var url = 'https://foodie1234.herokuapp.com/getMenuName';
      this.data = this.http.get(url);
      this.data.subscribe(data => {
      this.result = data;
      for(var i = 0; i < this.result.length; i++){
        submit.push(new SubmitReview(
          this.result[i].menuId,
          this.result[i].menuName,
         ));
        }
        this.storage.set('SubmitReview', submit);
      });
    }
}
