import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, App } from 'ionic-angular';
import { EditProfilePage } from '../PDP-edit-profile/PDP-edit-profile';
import { Profile } from '../../models/PDP-Profile';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login-page/login-page';

@Component({
  selector: 'page-PDP-profile',
  templateUrl: 'PDP-profile.html'
})

export class ProfilePage {
  loading: any;
  loginid: any;
  profiles: Profile[];
  profile: Profile;

  constructor(private app: App, public navCtrl: NavController, private storage: Storage, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Logging out'
    });
  }

  ionViewWillEnter(){
    let id = localStorage.getItem('loginid');
    this.storage.get('Profile').then((val) => {
      console.log(val);
      this.profiles = val;
      for (var i=0;i<this.profiles.length;i++){ 
        if (this.profiles[i].id == id){
          this.profile = this.profiles[i];
        }
      }
      console.log('Get Profile completed');
      console.log(this.profile);
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm logout',
      message: 'Are you sure you want to logout?',
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
            console.log('Yes');
            this.loading.present();
            this.storage.remove('loginid');
            this.app.getRootNav().setRoot(LoginPage);
            this.loading.dismiss();
          }
        }
      ]
    });
    alert.present();
  }

  goToEditProfile(profile){
    this.navCtrl.push(EditProfilePage, {
      data: profile
    });
  }
}
