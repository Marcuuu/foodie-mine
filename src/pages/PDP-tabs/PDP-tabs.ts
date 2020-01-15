import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingDetailsPage } from '../PDP-booking-details/PDP-booking-details';
import { MenuPage } from '../PDP-menu/PDP-menu';
import { NewDishPage } from '../PDP-new-dish/PDP-new-dish';
import { EditDishPage } from '../PDP-edit-dish/PDP-edit-dish';
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
  goToBookings(params){
    if (!params) params = {};
    this.navCtrl.push(BookingsPage);
  }goToBookingDetails(params){
    if (!params) params = {};
    this.navCtrl.push(BookingDetailsPage);
  }goToMenus(params){
    if (!params) params = {};
    this.navCtrl.push(MenusPage);
  }goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }goToNewDish(params){
    if (!params) params = {};
    this.navCtrl.push(NewDishPage);
  }goToEditDish(params){
    if (!params) params = {};
    this.navCtrl.push(EditDishPage);
  }
}
