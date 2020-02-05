import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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


@NgModule({
  declarations: [
    MyApp,
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
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp),
    TabsControllerPage,
    MenuDetailsPage,
    MakeBookingPage,
    LoginPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    EditMenuPage,
    EditProfilePage,
    NewDishPage,
    EditDishPage,
    LoginPage,
    TabsControllerPage,
    MenuDetailsPage,
    MakeBookingPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
