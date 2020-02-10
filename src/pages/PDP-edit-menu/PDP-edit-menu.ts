import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { MenusData } from '../../providers/PDP-menuData';
import { MenusPage } from '../PDP-menus/PDP-menus';

@Component({
  selector: 'page-PDP-edit-menu',
  templateUrl: 'PDP-edit-menu.html'
})
export class EditMenuPage {
  default = {option:null};
  menu: any;
  loading: any;
  deleting: any;
  editMenu: FormGroup;
  formInput = {menuName: '', menuCategory: '', menuImg: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public camera: Camera, public menuData: MenusData) {
    this.menu = navParams.get('data');
    this.default.option = this.menu.menuCategory;
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Saving'
    });

    this.deleting = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Deleting'
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
            console.log('Yes');
            this.loading.present();
            this.updateMenu();
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
            console.log('Yes');
            this.navCtrl.pop();
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
      buttons: [{
        text: 'Return',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
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
      menuID: this.menu.menuID
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
      console.log('SQL Result: ', data);
      this.menuData.getMenusData(this.menu.pdpID);
      setTimeout(() => {
        this.loading.dismiss();
        this.presentAlert();
      }, 2000);
    });
  }

  deleteConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm save',
      message: 'Are you sure you want to delete the menu?',
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
            console.log('Yes');
            this.deleting.present();
            this.deleteMenu();
          }
        }
      ]
    });
    alert.present();
  }
  
  deleteAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'The menu has been deleted',
      buttons: [{
        text: 'Return',
        handler: () => {
          this.navCtrl.setRoot(MenusPage);
        }
      }]
    });
    alert.present();
  }

  deleteMenu(){
    var url = 'https://foodie1234.herokuapp.com/deleteMenu';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID; 
      menuID: this.menu.menuID
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log("In /deleteMenu");
      console.log('SQL Result: ', data);
      this.menuData.getMenusData(this.menu.pdpID);
      setTimeout(() => {
        this.deleting.dismiss();
        this.deleteAlert();
      }, 2000);
    });
  }
}
