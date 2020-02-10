import { Component } from '@angular/core';
import { NavController , NavParams, LoadingController} from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { SubmitReview } from '../../models/CUST-SubmitReview';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-submitReview',
  templateUrl: 'submitReview.html'
})
export class CustSubmitReviewPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  rating:  any; 
  point: any;
  myText: String;
  menuInfo:any[];
  isValid:boolean=true;
  press:boolean=true;
  press1:boolean=true;
  // arr:SubmitReview[];
  datein: any = new Date().toISOString().substr(0,10);
  menuTitle:any;
  constructor(public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController,public http: HttpClient, public loc :Location, public storage:Storage) {

    this.menuTitle=navParams.get('item');

  }
  hitme(point){   
    this.point =point;
    this.press =false;
    if(this.press1 ==false && this.press == false){
      this.isValid=false;
    }
  }

  logRatingChange(rating){
    this.press1=false;
    if(this.press1 ==false && this.press == false){
      this.isValid=false;
    }
}
  submitReview() {
    var url = 'https://foodie1234.herokuapp.com/submitReview';
    var postData;
    if(this.point == "hygenie"){
       postData = JSON.stringify({
        //these fields MUST match the server.js request.body.XXX;
        menuId: this.menuTitle.menuId,  
        custId: localStorage.getItem("loginid"),
        rating: this.rating,
        cleanlinessRating: 1,
        foodQualityRating : 0,
        priceRating: 0,
        comments: this.myText,
        datein: this.datein,
      });
    }
    else if(this.point == "food"){
        postData = JSON.stringify({
        //these fields MUST match the server.js request.body.XXX;
        menuId: this.menuTitle.menuId,  
        custId: localStorage.getItem("loginid"),
        rating: this.rating,
        cleanlinessRating: 0,
        foodQualityRating : 1,
        priceRating: 0,
        comments: this.myText,
        datein: this.datein,
      });
    }
    else
    {
        postData = JSON.stringify({
        //these fields MUST match the server.js request.body.XXX;
        menuId: this.menuTitle.menuId,  
        custId: localStorage.getItem("loginid"),
        rating: this.rating,
        cleanlinessRating: 0,
        foodQualityRating : 0,
        priceRating: 1,
        comments: this.myText,
        datein: this.datein,
      });
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   
    this.http.post(url, postData, httpOptions).subscribe((data) => {
      if (data == true) {
         this.navCtrl.pop();
         let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
      
        loading.present();
      
        setTimeout(() => {
          loading.dismiss();
        }, 2000);
      } 
     }, error => {
      console.log(error);
    });
  }
}
