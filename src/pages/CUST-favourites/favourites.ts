import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { CustMenuInfoPage } from '../CUST-menuinfo/menuinfo';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class CustFavouritesPage {
menuPage:any;
data:any;
favs:any;
ishidden:any;
ishiddenimg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }
  ionViewWillEnter(){
    this.getFavs();
    console.log('ionViewWillEnter FavouritePage',this.ishiddenimg);
  }

  getFavs() {
    var url = 'https://foodie1234.herokuapp.com/getFavs';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      custId: localStorage.getItem("loginid"),
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };
    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log('postData:', postData);
      console.log("data",data);
      if(data == false)
      {
        this.ishidden=true;
        this.ishiddenimg=false;
        console.log('ionViewWillEnter FavouritePage1',this.ishidden);
        console.log('ionViewWillEnter FavouritePage2',this.ishiddenimg);
      }
      else
      {
        this.ishidden=false;
        this.ishiddenimg=true;
        console.log('ionViewWillEnter FavouritePage3',this.ishidden);
        console.log('ionViewWillEnter FavouritePage4',this.ishiddenimg);
        this.favs=data;
      }
        
    }, error => {
      console.log(error);
    });
  }
  goToMenuPage(menuId){
    //this.router.navigateByUrl('/pdpMenuPage/' + this.custId + '/' + menuId);
    localStorage.setItem('cust_menuid',menuId);
    this.navCtrl.push(CustMenuInfoPage);
  }

}
