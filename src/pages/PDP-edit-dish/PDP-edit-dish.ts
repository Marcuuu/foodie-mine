import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MenusData } from '../../providers/PDP-menuData';

@Component({
  selector: 'page-PDP-edit-dish',
  templateUrl: 'PDP-edit-dish.html'
})
export class EditDishPage {
  dish: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public menusData: MenusData) {
    this.dish = this.navParams.get('data'); 
  }
  
}
