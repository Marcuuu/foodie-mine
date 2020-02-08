import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html'
})
export class CustReviewsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  allReview:any;
  rating2:any;
  constructor(public navCtrl: NavController,public http: HttpClient) {
  }
  getPDP() {
    var url = 'https://foodie1234.herokuapp.com/getTopReview';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      menuId: localStorage.getItem("cust_menuid"),
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };
    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log('postData:', postData)
      console.log(data);
      this.allReview = data;
      this.rating2 = data[0].rating;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getPDP()
  }
}
