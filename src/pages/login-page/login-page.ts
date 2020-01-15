import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { DashboardPage } from '../PDP-dashboard/PDP-dashboard';
import { TabsPage } from '../PDP-tabs/PDP-tabs';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  cust:any;
  constructor(public navCtrl: NavController,public http: HttpClient) {
  }
  login(custId){
    var url = 'https://foodie1234.herokuapp.com/custLogin';
    var postData = JSON.stringify({
      //these fields MUST match the server.js request.body.XXX;  
      custId: custId,
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   
    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log('postData:', postData);
      //pdp
      if (data[0].custID == 3) {
        localStorage.setItem("loginid","3")
        this.navCtrl.setRoot(DashboardPage);
        this.navCtrl.setRoot(TabsPage);
      } 
      //customer
      if (data[0].custID == 2) {
        localStorage.setItem("loginid","2")
        this.navCtrl.push('');
      } 
      else if (data == false){
        console.log("Not authorized username");
      }
     }, error => {
      console.log(error);
    });
  }
}
