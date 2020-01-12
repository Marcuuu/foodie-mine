import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ReviewsPage } from '../reviews/reviews';
import { SubmitReview } from '../submitReview/submitReview';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuinfo',
  templateUrl: 'menuinfo.html',
})
export class MenuInfoPage {
data:any;
menuPage:any;
rating:any;
ratingNum:any;
visible:any=false;
TopReview:any;
menuInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.getMenuInfo();
  }

  ionViewWillEnter(){
    this.getTopReview();
    this.getAvgRating();
    
    console.log('ionViewWillEnter MenuPage');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave MenuPage');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave MenuPage');
  }

  // ngOnInit() {
  //   this.getMenuInfo();
  //   this.getTopReview();
  //   this.getAvgRating();
  //   // this.getPDPfName();
  // }
  
  favmenu(){
    this.visible = !this.visible;
    console.log(this.visible);
  }
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
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
      console.log('postData:', postData)
      console.log(data);
        this.TopReview=data;
    }, error => {
      console.log(error);
    });
  }

  // getPDPfName() {
  //   var url = 'https://foodie1234.herokuapp.com/getPDPfName';
  //   var postData = JSON.stringify({
  //     //these fields MUST match the server.js request.body.XXX;  
  //     menuId: this.menuId,
  //   });
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
  //     })
  //   };
  //   this.http.post(url, postData, httpOptions).subscribe((data) => {
  //     console.log('postData:', postData)
  //     console.log(data);
  //       this.fName=data;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

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
      console.log('postData:', postData)
      console.log(data);
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
      console.log('postData1:', postData)
      console.log(data);
      this.rating = data[0].avgFood;
      this.ratingNum = data[0].avgFood;
    }, error => {
      console.log(error);
    });
  }

  allReviews(){
    //this.router.navigateByUrl('/allReview/' + this.menuId);
    this.navCtrl.push(ReviewsPage);
  }

  navSubmitReview() {
    //this.router.navigateByUrl('/submitReview/' + this.custId +  '/' + this.menuId);
    this.navCtrl.push(SubmitReview);
  }
}
