import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../PDP-dashboard/PDP-dashboard';
import { BookingsPage } from '../PDP-bookings/PDP-bookings';
import { MenusPage } from '../PDP-menus/PDP-menus';
import { ProfilePage } from '../PDP-profile/PDP-profile';

@Component({
  selector: 'page-PDP-tabs',
  templateUrl: 'PDP-tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = BookingsPage;
  tab3Root: any = MenusPage;
  tab4Root: any = ProfilePage;
  constructor(public navCtrl: NavController) {
  }
}
