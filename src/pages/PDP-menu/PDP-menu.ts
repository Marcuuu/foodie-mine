import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewDishPage } from '../PDP-new-dish/PDP-new-dish';
import { EditMenuPage } from '../PDP-edit-menu/PDP-edit-menu';
import { EditDishPage } from '../PDP-edit-dish/PDP-edit-dish';

@Component({
  selector: 'page-PDP-menu',
  templateUrl: 'PDP-menu.html'
})
export class MenuPage {  
  menu: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.menu = navParams.get('data');
  console.log(this.menu);
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
