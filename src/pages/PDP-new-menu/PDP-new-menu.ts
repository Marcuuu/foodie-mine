import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-PDP-new-menu',
  templateUrl: 'PDP-new-menu.html'
})
export class NewMenuPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  
  presentCancel() {
    let alert = this.alertCtrl.create({
      title: 'Confirm cancel',
      message: 'Would you like to cancel and go back?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.pop();
            console.log('Yes');
          }
        }
      ]
    });
    alert.present();
  }
}
