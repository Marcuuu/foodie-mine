import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NewDishPage } from '../PDP-new-dish/PDP-new-dish';
import { EditMenuPage } from '../PDP-edit-menu/PDP-edit-menu';
import { EditDishPage } from '../PDP-edit-dish/PDP-edit-dish';
import { Storage } from '@ionic/storage';
import { MenusData } from '../../providers/PDP-menuData';
import { MenuItems } from '../../models/PDP-MenuItems';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-PDP-menu',
  templateUrl: 'PDP-menu.html'
})
export class MenuPage {
  deleting: any;
  menuData: any;
  menu: any;
  menuItems: MenuItems[];
  menuPrice: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,  public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public menusData: MenusData) {}

  ionViewWillEnter(){
    this.menuPrice = 0;
    this.menuData = this.navParams.get('data');
    console.log(this.menuData.menuID);
    this.storage.get('Menus').then((val) => {
      for (var i=0;i<val.length;i++){ 
        if (val[i].menuID == this.menuData.menuID){
          this.menu = val[i];
        }
      }
      console.log(this.menu);
      console.log('Get Menu completed');
    });
    this.storage.get('MenuItems').then((val) => {
      console.log(val);
      this.menuItems = val.filter(val => val.menuID == this.menu.menuID);
      console.log('Get Menu Items completed');
      console.log(this.menuItems);
      for (var i=0; i<this.menuItems.length; i++){
        this.menuPrice += this.menuItems[i].menuItemPrice;
      }
    });
  }

  createLoader(){
    this.deleting = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Deleting'
    });
  }

  deleteConfirm(menuItem) {
    let alert = this.alertCtrl.create({
      title: 'Confirm save',
      message: 'Are you sure you want to delete the dish?',
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
            this.createLoader();
            this.deleting.present();
            this.deleteDish(menuItem);
          }
        }
      ]
    });
    alert.present();
  }
  
  deleteAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'The dish has been deleted',
      buttons: [{
        text: 'Dismiss',
        handler: () => {   
          this.storage.get('MenuItems').then((val) => {
            this.menuPrice = 0;
            this.menuItems = val.filter(val => val.menuID == this.menu.menuID);
            for (var i=0; i<this.menuItems.length; i++){
              this.menuPrice += this.menuItems[i].menuItemPrice;
            }
          });
        }
      }]
    });
    alert.present();
  }

  deleteDish(menuItem){
    var url = 'https://foodie1234.herokuapp.com/deleteDish';
    var postData = JSON.stringify({
      // post data MUSt match the request.body.userID; 
      dishID: menuItem.menuItemID
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    };   

    this.http.post(url, postData, httpOptions).subscribe((data) => {  
      console.log("In /deleteDish");
      console.log('SQL Result: ', data);
      this.menusData.getMenuItemsData();
<<<<<<< HEAD
      this.deleting.dismiss();
      this.deleteAlert();
=======
      setTimeout(() => {
        this.deleting.dismiss();
        this.deleteAlert();
      }, 500);
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
    });
  }

  goToNewDish(){
    this.navCtrl.push(NewDishPage, {
      data: this.menu.menuID
    });
  }goToEditMenu(){
    this.navCtrl.push(EditMenuPage, {
      data: this.menu
    });
  }goToEditDish(menuItem){
    this.navCtrl.push(EditDishPage, {
      data: menuItem
    });
  }
}
