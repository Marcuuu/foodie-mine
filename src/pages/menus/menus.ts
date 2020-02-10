import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustMenuPage } from '../CUST-menu/menu';
import { NewDishPage } from '../new-dish/new-dish';
import { EditDishPage } from '../edit-dish/edit-dish';

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
    this.navCtrl.push(CustMenuPage);
  }goToNewDish(params){
    if (!params) params = {};
    this.navCtrl.push(NewDishPage);
  }goToEditDish(params){
    if (!params) params = {};
    this.navCtrl.push(EditDishPage);
  }
}
