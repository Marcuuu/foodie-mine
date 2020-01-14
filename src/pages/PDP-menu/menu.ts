import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewDishPage } from '../new-dish/new-dish';
import { EditDishPage } from '../edit-dish/edit-dish';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNewDish(params){
    if (!params) params = {};
    this.navCtrl.push(NewDishPage);
  }goToEditDish(params){
    if (!params) params = {};
    this.navCtrl.push(EditDishPage);
  }
}
