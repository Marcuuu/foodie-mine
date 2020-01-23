import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../PDP-menu/PDP-menu';
import { NewMenuPage } from '../PDP-new-menu/PDP-new-menu';
import { Menu } from '../../models/PDP-Menus';
import { MenusData } from '../../providers/PDP-menuData';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-PDP-menus',
  templateUrl: 'PDP-menus.html'
})
export class MenusPage {
  menus: Menu[];

  constructor(public navCtrl: NavController, private storage: Storage, public menusData: MenusData) {}

  ionViewWillEnter(){
    this.storage.get('Menus').then((val) => {
      console.log(val);
      this.menus = val;
      console.log('Get Menus completed');
    });
  }

  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }goToNewMenu(params){
    if (!params) params = {};
    this.navCtrl.push(NewMenuPage);
  }
}
