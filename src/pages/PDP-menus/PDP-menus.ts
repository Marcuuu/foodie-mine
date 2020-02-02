import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../PDP-menu/PDP-menu';
import { NewMenuPage } from '../PDP-new-menu/PDP-new-menu';
import { Menu } from '../../models/PDP-Menus';
import { Storage } from '@ionic/storage';
import { Profile } from '../../models/PDP-Profile';

@Component({
  selector: 'page-PDP-menus',
  templateUrl: 'PDP-menus.html'
})
export class MenusPage {
  profiles: Profile[];
  profile: Profile;
  menus: Menu[];

  constructor(public navCtrl: NavController, private storage: Storage) {}

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
    this.storage.get('Menus').then((val) => {
      console.log(val);
      this.menus = val;
      console.log('Get Menus completed');
    });
  }

  goToMenu(menu){
    this.navCtrl.push(MenuPage, {
      data: menu
    });
  }
  goToNewMenu(){
    this.navCtrl.push(NewMenuPage, {
      data: this.profile.id
    });
  }
}
