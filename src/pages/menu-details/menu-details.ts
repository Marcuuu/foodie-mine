import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { MakeBookingPage } from "../../pages/make-booking/make-booking";
import { CustSubmitReviewPage } from "../../pages/CUST-submitReview/submitReview";
import { CustReviewsPage } from "../../pages/CUST-reviews/reviews";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "page-menu-details",
  templateUrl: "menu-details.html"
})
export class MenuDetailsPage {
  details: any;

  menuList: any;
  menuData: Observable<any>;
  showImage = false;
  popupSrc: any;
  visible:any;
  TopReview:any;hvInfo:boolean;rating2:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.details = navParams.get("item");
  }

  ngOnInit() {
    this.getMenu();
  }

  ionViewWillEnter() {
    let body = document.getElementsByTagName("BODY")[0];
    body.classList.add("details-active");
    this.getFavAnot();
    this.getTopReview();
  }

  ionViewWillLeave() {
    let body = document.getElementsByTagName("BODY")[0];
    body.classList.remove("details-active");
  }

  goToMakeBookingPage(event, item) {
    this.navCtrl.push(MakeBookingPage, {
      item: item
    });
  }

  getMenu() {
    var url = "https://elp-tutorial.herokuapp.com/getmenu";
    this.menuData = this.http.get(url);
    this.menuData.subscribe(data => {
      this.menuList = data.filter(word => {
        if (word.menuId == this.details.menuId) {
          return word
        }
      })
    });
  }

  popupImage(event) {
    if (!this.showImage == true) {
      let imgSrc = event.srcElement.src;
      this.popupSrc = imgSrc;
      console.log(this.popupSrc);
    }
    this.showImage = !this.showImage;
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
      menuId: this.details.menuId,
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
      menuId: this.details.menuId,
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

  getFavAnot() {
    var url = 'https://foodie1234.herokuapp.com/getFavAnot';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      menuId: this.details.menuId,
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

  getTopReview() {
    var url = 'https://foodie1234.herokuapp.com/getTopReview';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      menuId: this.details.menuId,
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
          if (this.TopReview[i].cleanlinessRating == 1)
          {
            console.log("1",this.TopReview[i].cleanlinessRating);
            this.TopReview[i].cleanlinessRating = "../../assets/icon/broom.png";
          }
          else if(this.TopReview[i].foodQualityRating == 1)
          {
            console.log("2",this.TopReview[i].foodQualityRating);
            this.TopReview[i].cleanlinessRating = "../../assets/icon/food.png";
          }
          else if(this.TopReview[i].priceRating == 1)
          {
            console.log("3",this.TopReview[i].priceRating);
            this.TopReview[i].cleanlinessRating = "../../assets/icon/money.png";
          }
        }
      }

    }, error => {
      console.log(error);
    });
  }
  navSubmitReview() {
    console.log(this.details);
    this.navCtrl.push(CustSubmitReviewPage,{
      item:this.details
    });
  }
  allReviews(){
    this.navCtrl.push(CustReviewsPage,{
      item:this.details
    });
  }
}
