import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiscoverPage } from '../discover/discover';
import { CustFavouritesPage } from '../CUST-favourites/favourites';
import { CustBookingsPage } from '../bookings/bookings';
import { CustProfilePage } from '../CUST-profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DiscoverPage;
  tab2Root: any = CustFavouritesPage;
  tab3Root: any = CustBookingsPage;
  tab4Root: any = CustProfilePage;
  constructor(public navCtrl: NavController) {
  }
  
}
