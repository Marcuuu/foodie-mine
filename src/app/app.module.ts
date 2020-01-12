import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { DiscoverPage } from "../pages/discover/discover";
import { FavouritesPage } from "../pages/favourites/favourites";
import { BookingsPage } from "../pages/bookings/bookings";
import { TabsControllerPage } from "../pages/tabs-controller/tabs-controller";
import { ProfilePage } from "../pages/profile/profile";
import { MenuDetailsPage } from "../pages/menu-details/menu-details";
import { MakeBookingPage } from "../pages/make-booking/make-booking";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    DiscoverPage,
    FavouritesPage,
    BookingsPage,
    TabsControllerPage,
    ProfilePage,
    MenuDetailsPage,
    MakeBookingPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoverPage,
    FavouritesPage,
    BookingsPage,
    TabsControllerPage,
    ProfilePage,
    MenuDetailsPage,
    MakeBookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
