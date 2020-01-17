import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewDishPage } from '../PDP-new-dish/PDP-new-dish';
import { EditMenuPage } from '../PDP-edit-menu/PDP-edit-menu';

@Component({
  selector: 'page-PDP-menu',
  templateUrl: 'PDP-menu.html'
})
export class MenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNewDish(params){
    if (!params) params = {};
    this.navCtrl.push(NewDishPage);
  }goToEditMenu(params){
    if (!params) params = {};
    this.navCtrl.push(EditMenuPage);
  }
}
