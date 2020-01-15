import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../PDP-menu/PDP-menu';
import { NewMenuPage } from '../PDP-new-menu/PDP-new-menu';

@Component({
  selector: 'page-PDP-menus',
  templateUrl: 'PDP-menus.html'
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
