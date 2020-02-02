import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/PDP-dashboard/PDP-dashboard';
import { BookingsPage } from '../pages/PDP-bookings/PDP-bookings';
import { MenusPage } from '../pages/PDP-menus/PDP-menus';
import { PDPTabsPage } from '../pages/PDP-tabs/PDP-tabs';
import { ProfilePage } from '../pages/PDP-profile/PDP-profile';
import { BookingDetailsPage } from '../pages/PDP-booking-details/PDP-booking-details';
import { MenuPage } from '../pages/PDP-menu/PDP-menu';
import { CreateMenuPage } from '../pages/PDP-create-menu/PDP-create-menu';
import { EditMenuPage } from '../pages/PDP-edit-menu/PDP-edit-menu';
import { EditProfilePage } from '../pages/PDP-edit-profile/PDP-edit-profile';
import { NewDishPage } from '../pages/PDP-new-dish/PDP-new-dish';
import { EditDishPage } from '../pages/PDP-edit-dish/PDP-edit-dish';
import { CustMenuPage } from '../pages/CUST-menu/menu';
import { CustFavouritesPage } from '../pages/CUST-favourites/favourites' 
import { CustMenuInfoPage } from '../pages/CUST-menuinfo/menuinfo'
import { CustReviewsPage } from '../pages/CUST-reviews/reviews'
import { CustSubmitReviewPage } from '../pages/CUST-submitReview/submitReview'
import { CustTabsPage } from '../pages/CUST-tabs/tabs2'
import { StarRatingModule } from 'ionic3-star-rating';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { BookingsData } from '../providers/PDP-bookingData';
import { IonicStorageModule } from '@ionic/storage';
import { NewMenuPage } from '../pages/PDP-new-menu/PDP-new-menu';
import { LoginPage } from '../pages/login-page/login-page';
import { MenusData } from '../providers/PDP-menuData';
import { ProfileData } from '../providers/PDP-profileData';
import { DashboardData } from '../providers/PDP-dashboardData';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    BookingsPage,
    MenusPage,
    PDPTabsPage,
    ProfilePage,
    BookingDetailsPage,
    MenuPage,
    CreateMenuPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    NewMenuPage,
    LoginPage,
    CustFavouritesPage,
    CustMenuPage,
    CustMenuInfoPage,
    CustReviewsPage,
    CustSubmitReviewPage,
    CustTabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    BookingsPage,
    MenusPage,
    PDPTabsPage,
    ProfilePage,
    BookingDetailsPage,
    MenuPage,
    CreateMenuPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    NewMenuPage,
    LoginPage,CustFavouritesPage,
    CustMenuPage,
    CustMenuInfoPage,
    CustReviewsPage,
    CustSubmitReviewPage,
    CustTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardData,
    BookingsData,
    ProfileData,
    MenusData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}