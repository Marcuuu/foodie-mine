import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustFavouritesPage } from '../CUST-favourites/favourites';
import { CustMenuPage } from '../CUST-menu/menu';

@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html'
})
export class Tabs2Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CustFavouritesPage;
  tab2Root: any = CustMenuPage;
  constructor(public navCtrl: NavController) {
  }
  
}
