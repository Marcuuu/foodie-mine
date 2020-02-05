import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { CustMenuInfoPage } from '../CUST-menuinfo/menuinfo';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class CustMenuPage {
data:any;
menuPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MenuPage');
  }

  getPDP() {
    console.log("In getPDP()");
    var url = 'https://foodie1234.herokuapp.com/getMenu';
    this.data = this.http.get(url);
    this.data.subscribe((data) => {
      this.menuPage=data;
      console.log(data);
    });
  }
  goToMenuPage(menuid){
    localStorage.setItem("cust_menuid",menuid)
    this.navCtrl.push(CustMenuInfoPage);
  }
    ngOnInit(){
      this.getPDP()
    }
}
