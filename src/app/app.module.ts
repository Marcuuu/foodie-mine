import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BookingsPage } from '../pages/bookings/bookings';
import { MenusPage } from '../pages/menus/menus';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { BookingDetailsPage } from '../pages/booking-details/booking-details';
import { MenuPage } from '../pages/menu/menu';
import { CreateMenuPage } from '../pages/create-menu/create-menu';
import { EditMenuPage } from '../pages/edit-menu/edit-menu';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { NewDishPage } from '../pages/new-dish/new-dish';
import { EditDishPage } from '../pages/edit-dish/edit-dish';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    BookingsPage,
    MenusPage,
    TabsPage,
    ProfilePage,
    BookingDetailsPage,
    MenuPage,
    CreateMenuPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    BookingsPage,
    MenusPage,
    TabsPage,
    ProfilePage,
    BookingDetailsPage,
    MenuPage,
    CreateMenuPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}