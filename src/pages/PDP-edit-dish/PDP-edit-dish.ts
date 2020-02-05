import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenusData } from '../../providers/PDP-menuData';
import { Camera } from '@ionic-native/camera/ngx';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-PDP-edit-dish',
  templateUrl: 'PDP-edit-dish.html'
})
export class EditDishPage {
  dish: any;
  loading: any;
  editDish: FormGroup;
  formInput = {dishName: '', dishPrice: '', dishImg: ''};

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public camera: Camera, public menusData: MenusData) {
    this.dish = this.navParams.get('data');
    console.log(this.dish);
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Saving'
    });

    this.editDish = new FormGroup({
      dishName: new FormControl(),
      dishPrice: new FormControl(),
      dishImg: new FormControl()
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
            this.updateDish();
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
      subTitle: 'The dish has been updated',
      buttons: [{
        text: 'Return',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

  updateDish(){
    var url = 'https://foodie1234.herokuapp.com/updateDish';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID; 
      dishID: this.dish.menuItemID,
      dishName: this.editDish.value['dishName'],
      dishPrice: this.editDish.value['dishPrice'],
      dishImg: this.dish.menuItemImg // this.editDish.value['dishImg']
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {
      console.log("In /updateDish");
      console.log('postData:', postData);
      console.log('SQL Result: ', data);
      this.menusData.getMenuItemsData();
      this.loading.dismiss();
      this.presentAlert();
    });
  }
}
