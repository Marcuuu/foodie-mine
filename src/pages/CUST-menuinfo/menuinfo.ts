import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { CustReviewsPage } from '../CUST-reviews/reviews';
import { CustSubmitReviewPage } from '../CUST-submitReview/submitReview';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menuinfo',
  templateUrl: 'menuinfo.html',
})
export class CustMenuInfoPage {
data:any;
menuPage:any;
rating:any;
rating2:any;
ratingNum:any;
visible:any;
TopReview:any;
hvInfo:boolean;
menuInfo:any;
loading: any;
data1:any;
imgInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, public loadingCtrl: LoadingController, public storage: Storage) {

    this.data1=navParams.get('item');
  }

  ngOnInit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  ionViewWillEnter(){
    this.getTopReview();
    this.getAvgRating();
    this.getFavAnot();
    console.log('ionViewWillEnter MenuPage');
  }
  favmenu(){
    if(this.visible==true){
      this.getDeleteFavMenu();     
      console.log("Deleted FaveMenu")
    }
    else if(this.visible==false){
      this.getInsertFavMenu();
      console.log("Inserted FaveMenu")
    }

  }
  getDeleteFavMenu() {
    var url = 'https://foodie1234.herokuapp.com/getDeleteFavMenu';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      menuId: localStorage.getItem('cust_menuid'),
      loginId: localStorage.getItem('loginid'),
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };
    this.http.post(url, postData, httpOptions).subscribe((data) => {
      this.visible=false;
    }, error => {
      console.log(error);
    });
  }
  getInsertFavMenu() {
    var url = 'https://foodie1234.herokuapp.com/getInsertFavMenu';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      menuId: localStorage.getItem('cust_menuid'),
      loginId: localStorage.getItem('loginid'),
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };
    this.http.post(url, postData, httpOptions).subscribe((data) => {
      this.visible=true;
    }, error => {
      console.log(error);
    });
  }
  getTopReview() {
    var url = 'https://foodie1234.herokuapp.com/getTopReview';
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
      if (data == false){
        this.hvInfo=true
      }
      else{
        this.hvInfo=false
        this.TopReview=data;
        for(var i=0; i<this.TopReview.length; i++)
        {
          this.rating2 = data[i].rating;
          if (data[i].cleanlinessRating == 1)
          {
            console.log("1",data[i].cleanlinessRating);
            data[i].cleanlinessRating = "../../assets/icon/broom.png";
            console.log("11",this.imgInfo);
          }
          else if(data[i].foodQualityRating == 1)
          {
            console.log("2",data[i].foodQualityRating);
            data[i].cleanlinessRating = "../../assets/icon/food.png";
            console.log("22",this.imgInfo);
          }
          else if(data[i].priceRating == 1)
          {
            console.log("3",data[i].priceRating);
            data[i].cleanlinessRating = "../../assets/icon/money.png";
            console.log("33",this.imgInfo);
          }
        }
      }

    }, error => {
      console.log(error);
    });
  }
  getMenuInfo() {
    var url = 'https://foodie1234.herokuapp.com/getMenuInfo';
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
        this.menuInfo=data;
    }, error => {
      console.log(error);
    });
  }
  getAvgRating() {
    var url = 'https://foodie1234.herokuapp.com/getAvgRating';
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
      if(this.ratingNum == false){
        this.rating=0;
        this.ratingNum = 0;
      }
      else{
      this.rating = data[0].avgFood;
      this.ratingNum = data[0].avgFood;
    }
    }, error => {
      console.log(error);
    });
  }
  getFavAnot() {
    var url = 'https://foodie1234.herokuapp.com/getFavAnot';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      menuId: localStorage.getItem('cust_menuid'),
      loginId: localStorage.getItem('loginid'),
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };
    this.http.post(url, postData, httpOptions).subscribe((data) => {
        this.visible=data;
    }, error => {
      console.log(error);
    });
  }
  allReviews(){
    this.navCtrl.push(CustReviewsPage);
  }
  navSubmitReview(menuname) {
    this.navCtrl.push(CustSubmitReviewPage,{
      item:menuname
    });
  }
}
