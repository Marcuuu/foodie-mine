import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { DashboardPage } from '../pages/dashboard/dashboard';
import { DashboardPage } from '../pages/PDP-dashboard/PDP-dashboard';
import { BookingsPage } from '../pages/PDP-bookings/PDP-bookings';
import { MenusPage } from '../pages/PDP-menus/PDP-menus';
// import { MenusPage } from '../pages/menus/menus';
import { BookingDetailsPage } from '../pages/PDP-booking-details/PDP-booking-details';
// import { DashboardPage } from '../pages/dashboard/dashboard';
// import { MenusPage } from '../pages/menus/menus';
import { Tabs2Page } from '../pages/tabs2/tabs2';
// import { BookingDetailsPage } from '../pages/booking-details/booking-details';
// import { CustMenuPage } from '../pages/CUST-menu/menu';
import { CustMenuInfoPage } from '../pages/CUST-menuinfo/menuinfo';
// // import { EditMenuPage } from '../pages/edit-menu/edit-menu';
// // import { EditProfilePage } from '../pages/edit-profile/edit-profile';
// // import { NewDishPage } from '../pages/new-dish/new-dish';
// // import { EditDishPage } from '../pages/edit-dish/edit-dish';
import { CustFavouritesPage } from '../pages/CUST-favourites/favourites';
// import { LoginPage } from '../pages/login-page/login-page';
// import { StarRatingModule } from 'ionic3-star-rating';
import { DiscoverPage } from "../pages/discover/discover";
import { TabsControllerPage } from "../pages/tabs-controller/tabs-controller";
import { MenuDetailsPage } from "../pages/menu-details/menu-details";
import { MakeBookingPage } from "../pages/make-booking/make-booking";
// import { StatusBar } from "@ionic-native/status-bar";
// import { SplashScreen } from "@ionic-native/splash-screen";
// import { HttpClientModule } from "@angular/common/http";
// import { CustReviewsPage } from '../pages/CUST-reviews/reviews'
// import { CustSubmitReviewPage } from '../pages/CUST-submitReview/submitReview'
// import { CustTabsPage } from '../pages/CUST-tabs/tabs2'
// import { BookingsData } from '../providers/PDP-bookingData';
// import { IonicStorageModule } from '@ionic/storage';
// import { NewMenuPage } from '../pages/PDP-new-menu/PDP-new-menu';
// import { DashboardPage } from '../pages/PDP-dashboard/PDP-dashboard';
// import { BookingsPage } from '../pages/PDP-bookings/PDP-bookings';
// import { MenusPage } from '../pages/PDP-menus/PDP-menus';
// import { PDPTabsPage } from '../pages/PDP-tabs/PDP-tabs';
// import { ProfilePage } from '../pages/PDP-profile/PDP-profile';
// import { BookingDetailsPage } from '../pages/PDP-booking-details/PDP-booking-details';
// import { MenuPage } from '../pages/PDP-menu/PDP-menu';
// import { EditMenuPage } from '../pages/PDP-edit-menu/PDP-edit-menu';
// import { EditProfilePage } from '../pages/PDP-edit-profile/PDP-edit-profile';
// import { NewDishPage } from '../pages/PDP-new-dish/PDP-new-dish';
// import { EditDishPage } from '../pages/PDP-edit-dish/PDP-edit-dish';
import { CustMenuPage } from '../pages/CUST-menu/menu';
// import { CustFavouritesPage } from '../pages/CUST-favourites/favourites' 
// import { CustMenuInfoPage } from '../pages/CUST-menuinfo/menuinfo'
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
import { Camera } from '@ionic-native/camera/ngx';
import { PDPTabsPage } from '../pages/PDP-tabs/PDP-tabs';
import { ProfilePage } from '../pages/PDP-profile/PDP-profile';
import { CustProfilePage } from '../pages/CUST-profile/profile';
import { MenuPage } from '../pages/PDP-menu/PDP-menu';
import { EditMenuPage } from '../pages/PDP-edit-menu/PDP-edit-menu';
import { EditProfilePage } from '../pages/PDP-edit-profile/PDP-edit-profile';
import { NewDishPage } from '../pages/PDP-new-dish/PDP-new-dish';
import { EditDishPage } from '../pages/PDP-edit-dish/PDP-edit-dish';
import { CustBookingDetailsPage } from '../pages/cust-booking-details/cust-booking-details';
import { CustRescheduleBookingPage } from '../pages/cust-reschedule-booking/cust-reschedule-booking';
import { CustPastBookingDetailsPage } from '../pages/cust-past-booking-details/cust-past-booking-details';
import { CustbViewMenuPage } from '../pages/custb-view-menu/custb-view-menu';
import { CustBookingsPage } from '../pages/cust-bookings/cust-bookings';
import { CustOngoingBookingsPage } from '../pages/cust-ongoing-bookings/cust-ongoing-bookings';
import { CustPastBookingsPage } from '../pages/cust-past-bookings/cust-past-bookings';
import { CustBookData } from '../providers/Cust-bookingData';
import { CustPBookData } from '../providers/Cust-pastBookingData';

@NgModule({
  declarations: [
    MyApp,
    DiscoverPage,
    CustFavouritesPage,
    BookingsPage,
    MenusPage,
    Tabs2Page,
    BookingDetailsPage,
    CustMenuPage,
    CustMenuInfoPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    LoginPage,
    DashboardPage,
    BookingsPage,
    MenusPage,
    PDPTabsPage,
    ProfilePage,
    CustProfilePage,
    MenuPage,
    NewMenuPage,
    TabsControllerPage,
    MenuDetailsPage,
    CustBookingsPage,
    MakeBookingPage,
    CustFavouritesPage,
    CustReviewsPage,
    CustSubmitReviewPage,
    CustBookingDetailsPage,
    CustRescheduleBookingPage,
    CustPastBookingDetailsPage,
    CustbViewMenuPage,
    CustBookingsPage,
    CustOngoingBookingsPage,
    CustPastBookingsPage,
    CustTabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
    // TabsControllerPage,
    // MenuDetailsPage,
    // MakeBookingPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoverPage,
    CustFavouritesPage,
    BookingsPage,
    MenusPage,
    Tabs2Page,
    BookingDetailsPage,
    CustMenuPage,
    CustMenuInfoPage,
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    LoginPage,
    TabsControllerPage,
    MenuDetailsPage,
    CustBookingsPage,
    MakeBookingPage,
    DashboardPage,
    PDPTabsPage,
    ProfilePage,
    CustProfilePage,
    MenuPage,
    NewMenuPage,
    CustReviewsPage,
    CustSubmitReviewPage,
    CustBookingDetailsPage,
    CustRescheduleBookingPage,
    CustPastBookingDetailsPage,
    CustbViewMenuPage,
    CustBookingsPage,
    CustOngoingBookingsPage,
    CustPastBookingsPage,
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
    CustBookData,
    CustPBookData,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
