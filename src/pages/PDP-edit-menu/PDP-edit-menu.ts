import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { MenusData } from '../../providers/PDP-menuData';

@Component({
  selector: 'page-PDP-edit-menu',
  templateUrl: 'PDP-edit-menu.html'
})
export class EditMenuPage {
  default = {option:null};
  menu: any;
  loading: any;
  editMenu: FormGroup;
  formInput = {menuName: '', menuCategory: '', menuImg: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public camera: Camera, public menuData: MenusData) {
    this.menu = navParams.get('data');
    this.default.option = this.menu.menuCategory;
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Saving'
    });

    this.editMenu = new FormGroup({
      menuName: new FormControl(),
      menuCategory: new FormControl(),
      menuImg: new FormControl()
    });
  }
  
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm save',
      message: 'Would you like to save your changes?',
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
            this.updateMenu();
            this.loading.present();
            console.log('Yes');
          }
        }
      ]
    });
    alert.present();
  }

  presentCancel() {
    let alert = this.alertCtrl.create({
      title: 'Confirm cancel',
      message: 'Would you like to discard your changes and go back?',
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

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'The menu has been updated',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  updateMenu(){
    var url = 'https://foodie1234.herokuapp.com/updateMenu';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID; 
      menuName: this.editMenu.value['menuName'],
      menuCategory: this.editMenu.value['menuCategory'],
      menuImg: this.menu.menuImg, // this.editMenu.value['menuImg'],
      pdpID: this.menu.pdpID
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log("In /updateMenu");
      console.log('postData:', postData);
      this.loading.dismiss();
      this.presentAlert();
      this.menuData.getMenusData(this.menu.pdpID);
    });
  }
}
