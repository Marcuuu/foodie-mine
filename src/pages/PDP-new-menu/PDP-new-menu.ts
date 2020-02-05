import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { FormGroup, FormControl } from '@angular/forms';
import { MenusData } from '../../providers/PDP-menuData';
import { MenusPage } from '../PDP-menus/PDP-menus';

@Component({
  selector: 'page-PDP-new-menu',
  templateUrl: 'PDP-new-menu.html'
})
export class NewMenuPage {
  default = {option:null};
  pdp_id: any;
  loading: any;
  newMenu: FormGroup;
  formInput = {menuName: '', menuCategory: '',
  //  menuImg: ''
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public camera: Camera, public menusData: MenusData) {
    this.pdp_id = navParams.get('data');
    this.default.option = "Chinese";
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Saving'
    });

    this.newMenu = new FormGroup({
      menuName: new FormControl(),
      menuCategory: new FormControl(),
      // menuImg: new FormControl()
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm save',
      message: 'Would you like to save your new menu?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.createNewMenu();
            this.loading.present();
            console.log('Yes');
          }
        }
      ]
    });
    alert.present();
  }

  createNewMenu(){
    var url = 'https://foodie1234.herokuapp.com/createNewMenu';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID;
      menuName: this.newMenu.value['menuName'],
      menuCategory: this.newMenu.value['menuCategory'],
      menuImg: '',// this.newMenu.value['menuImg'],      
      pdpID: this.pdp_id
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log("In /createNewMenu");
      console.log('postData:', postData);
      console.log('SQL Result: ', data);
      this.menusData.getMenusData(this.pdp_id);
      setTimeout(() => {
        this.loading.dismiss();
        this.presentAlert();
      }, 1500);
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Your new menu "'+this.newMenu.value['menuName']+'" has been created',
      buttons: [{
        text: 'Return',
        handler: () => {
          this.navCtrl.setRoot(MenusPage);
        }
      }]
    });
    alert.present();
  }
  
  presentCancel() {
    let alert = this.alertCtrl.create({
      title: 'Confirm cancel',
      message: 'Would you like to cancel and go back?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.pop();
            console.log('Yes');
          }
        }
      ]
    });
    alert.present();
  }
}
