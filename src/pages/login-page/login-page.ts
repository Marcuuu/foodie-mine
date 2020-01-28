import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { PDPTabsPage } from '../PDP-tabs/PDP-tabs';
import { ProfileData } from '../../providers/PDP-profileData';
import { BookingsData } from '../../providers/PDP-bookingData';
import { DashboardData } from '../../providers/PDP-dashboardData';
import { MenusData } from '../../providers/PDP-menuData';


@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {
  cust: any;
  loading: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public loadingCtrl: LoadingController, public dashboardData: DashboardData, public bookingData: BookingsData, public menusData: MenusData, public profileData: ProfileData) {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Authenticating'
    });

    dashboardData.getDashboardData();
    bookingData.getBookingsData();
    profileData.getProfileData();
    menusData.getMenusData();    
    menusData.getMenuItemsData();
  }
  
  login(custId){
    this.loading.present();
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
        var url = 'https://foodie1234.herokuapp.com/updateDashboard';
        if (this.http.get(url).subscribe())          
          console.log("In /updateDashboard");
        localStorage.setItem("loginid","3");
        this.navCtrl.setRoot(PDPTabsPage);
        this.loading.dismiss();
      } 
      //customer
      if (data[0].custID == 2) {
        localStorage.setItem("loginid","2")
        this.navCtrl.push('');
        this.loading.dismiss();
      } 
      else if (data == false){
        console.log("Not authorized username");
        this.loading.dismiss();
      }
     }, error => {
      console.log(error);
    });
  }
}
