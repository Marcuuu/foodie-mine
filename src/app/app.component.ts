import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD


import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


=======
import { LoginPage } from '../pages/login-page/login-page';
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
<<<<<<< HEAD
  rootPage:any = TabsControllerPage;
=======
  rootPage:any = LoginPage;
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
<<<<<<< HEAD
    });
=======
    });    
>>>>>>> c535ca7c76ce11a29d122f2509eedc2554c5cfad
  }
  
}
