import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
menuPage:any;
data:any;
favs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
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
      console.log('postData:', postData)
      console.log(data);
        this.favs=data;
    }, error => {
      console.log(error);
    });
  }
  goToMenuPage(menuId){
    //this.router.navigateByUrl('/pdpMenuPage/' + this.custId + '/' + menuId);
  }
    ngOnInit(){
      //this.custId = this.activatedRoute.snapshot.paramMap.get('custId');
      this.getFavs();
    }

}
