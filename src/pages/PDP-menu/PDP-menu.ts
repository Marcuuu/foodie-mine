import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NewDishPage } from '../PDP-new-dish/PDP-new-dish';
import { EditMenuPage } from '../PDP-edit-menu/PDP-edit-menu';
import { EditDishPage } from '../PDP-edit-dish/PDP-edit-dish';
import { Storage } from '@ionic/storage';
import { MenusData } from '../../providers/PDP-menuData';
import { MenuItems } from '../../models/PDP-MenuItems';

@Component({
  selector: 'page-PDP-menu',
  templateUrl: 'PDP-menu.html'
})
export class MenuPage {
  menu: any;
  menuItems: MenuItems[];
  menuPrice: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController, public menusData: MenusData) {}

  ionViewWillEnter(){
    this.menuPrice = 0;
    this.menu = this.navParams.get('data');
    console.log(this.menu);
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

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm save',
      message: 'Would you like to delete your dish?',
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
            // this.deleteDish();
            // this.loading.present();
            console.log('Yes');
          }
        }
      ]
    });
    alert.present();
  }

  goToNewDish(params){
    if (!params) params = {};
    this.navCtrl.push(NewDishPage);
  }goToEditMenu(params){
    if (!params) params = {};
    this.navCtrl.push(EditMenuPage);
  }goToEditDish(params){
    if (!params) params = {};
    this.navCtrl.push(EditDishPage);
  }
}
