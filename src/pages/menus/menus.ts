import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { NewMenuPage } from '../new-menu/new-menu';

@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html'
})
export class MenusPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }goToNewMenu(params){
    if (!params) params = {};
    this.navCtrl.push(NewMenuPage);
  }
}
