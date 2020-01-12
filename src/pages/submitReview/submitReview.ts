import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'page-submitReview',
  templateUrl: 'submitReview.html'
})
export class SubmitReview {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  rating1: any;
  rating2: any;
  rating3: any;
  myText: String;
  constructor(public navCtrl: NavController,public http: HttpClient, public loc :Location) {
  }
  submitReview() {
    var url = 'https://foodie1234.herokuapp.com/submitReview';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;
      menuId: localStorage.getItem("cust_menuid"),  
      custId: localStorage.getItem("loginid"),
      cleanlinessRating: this.rating1,
      foodQualityRating : this.rating2,
      priceRating: this.rating3,
      comments: this.myText,
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   
    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log('postData:', postData)
      console.log(data);
      if (data == true) {
         this.navCtrl.pop();
      } 
     }, error => {
      console.log(error);
    });
  }
}
