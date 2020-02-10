import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
<<<<<<< HEAD
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MenusPage } from '../pages/menus/menus';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { BookingDetailsPage } from '../pages/booking-details/booking-details';
import { CustMenuPage } from '../pages/CUST-menu/menu';
import { CustMenuInfoPage } from '../pages/CUST-menuinfo/menuinfo';
import { CreateMenuPage } from '../pages/create-menu/create-menu';
import { EditMenuPage } from '../pages/edit-menu/edit-menu';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { NewDishPage } from '../pages/new-dish/new-dish';
import { EditDishPage } from '../pages/edit-dish/edit-dish';
import { CustFavouritesPage } from '../pages/CUST-favourites/favourites';
import { LoginPage } from '../pages/login-page/login-page';
import { StarRatingModule } from 'ionic3-star-rating';
import { DiscoverPage } from "../pages/discover/discover";
import { BookingsPage } from "../pages/bookings/bookings";
import { TabsControllerPage } from "../pages/tabs-controller/tabs-controller";
import { MenuDetailsPage } from "../pages/menu-details/menu-details";
import { MakeBookingPage } from "../pages/make-booking/make-booking";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpClientModule } from "@angular/common/http";
import { CustReviewsPage } from '../pages/CUST-reviews/reviews'
import { CustSubmitReviewPage } from '../pages/CUST-submitReview/submitReview'
import { CustTabsPage } from '../pages/CUST-tabs/tabs2'
import { BookingsData } from '../providers/PDP-bookingData';
import { IonicStorageModule } from '@ionic/storage';
import { NewMenuPage } from '../pages/PDP-new-menu/PDP-new-menu';
=======
import { DashboardPage } from '../pages/PDP-dashboard/PDP-dashboard';
import { BookingsPage } from '../pages/PDP-bookings/PDP-bookings';
import { MenusPage } from '../pages/PDP-menus/PDP-menus';
import { PDPTabsPage } from '../pages/PDP-tabs/PDP-tabs';
import { ProfilePage } from '../pages/PDP-profile/PDP-profile';
import { BookingDetailsPage } from '../pages/PDP-booking-details/PDP-booking-details';
import { MenuPage } from '../pages/PDP-menu/PDP-menu';
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
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
import { MenusData } from '../providers/PDP-menuData';
import { ProfileData } from '../providers/PDP-profileData';
import { DashboardData } from '../providers/PDP-dashboardData';
import { Camera } from '@ionic-native/camera/ngx';
<<<<<<< HEAD
import { PDPTabsPage } from '../pages/PDP-tabs/PDP-tabs';
import { ProfilePage } from '../pages/PDP-profile/PDP-profile';
import { MenuPage } from '../pages/PDP-menu/PDP-menu';
=======

>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    DiscoverPage,
    CustFavouritesPage,
    BookingsPage,
    MenusPage,
    TabsPage,
    Tabs2Page,
    BookingDetailsPage,
    CustMenuPage,
    CustMenuInfoPage,
    CreateMenuPage,
=======
    DashboardPage,
    BookingsPage,
    MenusPage,
    PDPTabsPage,
    ProfilePage,
    BookingDetailsPage,
    MenuPage,
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
<<<<<<< HEAD
    LoginPage,
    DashboardPage,
    BookingsPage,
    MenusPage,
    PDPTabsPage,
    ProfilePage,
    NewMenuPage,
    CustFavouritesPage,
=======
    NewMenuPage,
    LoginPage,
    CustFavouritesPage,
    CustMenuPage,
    CustMenuInfoPage,
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
    CustReviewsPage,
    CustSubmitReviewPage,
    CustTabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp),
<<<<<<< HEAD
    TabsControllerPage,
    MenuDetailsPage,
    MakeBookingPage
=======
    IonicStorageModule.forRoot()
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    DiscoverPage,
    CustFavouritesPage,
    BookingsPage,
    MenusPage,
    TabsPage,
    Tabs2Page,
    BookingDetailsPage,
    CustMenuPage,
    CustMenuInfoPage,
    CreateMenuPage,
=======
    DashboardPage,
    BookingsPage,
    MenusPage,
    PDPTabsPage,
    ProfilePage,
    BookingDetailsPage,
    MenuPage,
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
<<<<<<< HEAD
    LoginPage,
    TabsControllerPage,
    MenuDetailsPage,
    MakeBookingPage,
    DashboardPage,
    PDPTabsPage,
    ProfilePage,
    MenuPage,
    NewMenuPage,
=======
    NewMenuPage,
    LoginPage,CustFavouritesPage,
    CustMenuPage,
    CustMenuInfoPage,
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
    CustReviewsPage,
    CustSubmitReviewPage,
    CustTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    DashboardData,
    BookingsData,
    ProfileData,
    MenusData,
<<<<<<< HEAD
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
