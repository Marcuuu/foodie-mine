import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditProfilePage } from '../PDP-edit-profile/PDP-edit-profile';
import { Profile } from '../../models/PDP-Profile';
import { Storage } from '@ionic/storage';
import { ProfileData } from '../../providers/PDP-profileData';

@Component({
  selector: 'page-PDP-profile',
  templateUrl: 'PDP-profile.html'
})

export class ProfilePage {
  loginid: any;
  profiles: Profile[];
  profile: Profile;

  constructor(public navCtrl: NavController, private storage: Storage, public profileData: ProfileData) {}

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

  goToEditProfile(profile){
    this.navCtrl.push(EditProfilePage, {
      data: profile
    });
  }
}
