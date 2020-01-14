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
import { HttpClientModule } from '@angular/common/http';
import { BookingsData } from '../providers/bookingData';
import { IonicStorageModule } from '@ionic/storage';
import { NewMenuPage } from '../pages/new-menu/new-menu';
import { LoginPage } from '../pages/login-page/login-page';

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
    EditDishPage,
    NewMenuPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    EditDishPage,
    NewMenuPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BookingsData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}