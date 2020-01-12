import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { MenuPage } from '../cust_menu/menu';

@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html'
})
export class Tabs2Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FavouritesPage;
  tab2Root: any = MenuPage;
  constructor(public navCtrl: NavController) {
  }
  
}
