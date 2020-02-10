import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
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
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public http: HttpClient) {
  }
  ngOnInit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  getPDP() {
    var url = 'https://foodie1234.herokuapp.com/getReviewName';
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
      for(var i=0; i<this.allReview.length; i++)
      {
        this.rating2 = data[i].rating;
        if (data[i].cleanlinessRating == 1)
        {
          console.log("1",data[i].cleanlinessRating);
          data[i].cleanlinessRating = "../../assets/icon/broom.png";
        }
        else if(data[i].foodQualityRating == 1)
        {
          console.log("2",data[i].foodQualityRating);
          data[i].cleanlinessRating = "../../assets/icon/food.png";
        }
        else if(data[i].priceRating == 1)
        {
          console.log("3",data[i].priceRating);
          data[i].cleanlinessRating = "../../assets/icon/money.png";
        }
      }
    
    }, error => {
      console.log(error);
    });
  }
  ionViewWillEnter(){
    this.getPDP()
  }
}
