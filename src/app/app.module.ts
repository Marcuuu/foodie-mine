import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BookingsPage } from '../pages/bookings/bookings';
import { MenusPage } from '../pages/menus/menus';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { BookingDetailsPage } from '../pages/booking-details/booking-details';
import { MenuPage } from '../pages/cust_menu/menu';
import { MenuInfoPage } from '../pages/cust_menuinfo/menuinfo';
import { CreateMenuPage } from '../pages/create-menu/create-menu';
import { EditMenuPage } from '../pages/edit-menu/edit-menu';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { NewDishPage } from '../pages/new-dish/new-dish';
import { EditDishPage } from '../pages/edit-dish/edit-dish';
import { FavouritesPage } from '../pages/CUST-favourites/favourites';
import { LoginPage } from '../pages/login-page/login-page';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    BookingsPage,
    MenusPage,
    TabsPage,
    Tabs2Page,
    BookingDetailsPage,
    MenuPage,
    MenuInfoPage,
    CreateMenuPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    FavouritesPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    BookingsPage,
    MenusPage,
    TabsPage,
    Tabs2Page,
    BookingDetailsPage,
    MenuPage,
    MenuInfoPage,
    CreateMenuPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    FavouritesPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}