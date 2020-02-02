import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { FormGroup, FormControl } from '@angular/forms';
import { MenusData } from '../../providers/PDP-menuData';

@Component({
  selector: 'page-PDP-new-dish',
  templateUrl: 'PDP-new-dish.html'
})
export class NewDishPage {
  loading: any;
  newNenuItem: FormGroup;
  formInput = {menuItemName: '', menuItemPrice: '',
  //  menuImg: ''
  };
  
  constructor(public navCtrl: NavController, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public camera: Camera, public menusData: MenusData) {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Saving'
    });

    this.newNenuItem = new FormGroup({
      menuItemName: new FormControl(),
      menuItemPrice: new FormControl(),
      // menuImg: new FormControl()
    })
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm save',
      message: 'Would you like to save your new dish?',
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
            this.createNewDish();
            this.loading.present();
            console.log('Yes');
          }
        }
      ]
    });
    alert.present();
  }

  createNewDish(){
    var url = 'https://foodie1234.herokuapp.com/createNewDish';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID;
      menuItemName: this.newNenuItem.value['menuItemName'],
      menuItemPrice: this.newNenuItem.value['menuItemPrice'],
      menuItemImg: ''// this.newMenu.value['menuImg']
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log("In /createNewDish");
      console.log('postData:', postData);
      this.loading.dismiss();
      this.presentAlert();
      this.menusData.getMenuItemsData();
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Your new dish "'+this.newNenuItem.value['menuItemName']+'" has been created',
      buttons: ['Dismiss']
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
