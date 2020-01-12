import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingDetailsPage } from '../booking-details/booking-details';
import { MenuPage } from '../cust_menu/menu';
import { NewDishPage } from '../new-dish/new-dish';
import { EditDishPage } from '../edit-dish/edit-dish';
import { DashboardPage } from '../dashboard/dashboard';
import { BookingsPage } from '../bookings/bookings';
import { MenusPage } from '../menus/menus';
import { ProfilePage } from '../profile/profile';
import { FavouritesPage} from '../favourites/favourites';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = BookingsPage;
  tab3Root: any = MenusPage;
  tab4Root: any = ProfilePage;
  tab5Root: any = FavouritesPage;
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
