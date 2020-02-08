import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  menuInfo:any;
  isValid:boolean=true;
  arr:SubmitReview[];
  menuName:SubmitReview;
  datein: any = new Date().toISOString().substr(0,10);
  constructor(public navCtrl: NavController,public http: HttpClient, public loc :Location, public storage:Storage) {
  }
  hitme(point){
    this.point =point;
  }
  // ngOnInit(){
  //   this.getMenuInfo();
  // }
  // async ionViewWillEnter(){
  //   console.log("WillEnter1");
  //   await this.getMenuInfo();
  //   console.log("WillEnter2");
  //  } 
  // async ionViewDidEnter(){
  //   console.log("DidEnter1");
  //   await this.getMenuInfo();
  //   console.log("DidEnter2");
  //  } 

   ionViewWillEnter(){
    let menuId = localStorage.getItem('cust_menuid')
    console.log("menuid",menuId);
    console.log("info",this.storage.get('SubmitReview'));
    // this.storage.get('SubmitReview').then((data) => {
    //   console.log(data);
    //   this.arr = data;
    //   for (var i=0;i<this.arr.length;i++){ 
    //     if (this.arr[i].menuId == menuId){
    //       console.log("arr1", this.arr[i]);
    //       console.log("arr2", this.arr[i].menuName);
    //       // this.menuName = this.arr[i];
    //     }
    //   }
    //   console.log('Get Menu Name completed');
    //   console.log(this.menuName);
    // });
  }
  logRatingChange(rating){
    this.isValid=false;
}
  submitReview() {
    var url = 'https://foodie1234.herokuapp.com/submitReview';
    var postData;
    if(this.point == "hygenie"){
       postData = JSON.stringify({
        //these fields MUST match the server.js request.body.XXX;
        menuId: localStorage.getItem("cust_menuid"),  
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
        menuId: localStorage.getItem("cust_menuid"),  
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
        menuId: localStorage.getItem("cust_menuid"),  
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
      console.log('postData:', postData)
      console.log(data);
      if (data == true) {
         this.navCtrl.pop();
      } 
     }, error => {
      console.log(error);
    });
  }
  getMenuInfo() {
    var url = 'https://foodie1234.herokuapp.com/getMenuName';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      menuId: localStorage.getItem('cust_menuid'),
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
        this.menuInfo=data;
    }, error => {
      console.log(error);
    });
  }
}
