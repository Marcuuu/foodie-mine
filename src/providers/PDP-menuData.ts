import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Menu } from '../models/PDP-Menus';
import { MenuItems } from '../models/PDP-MenuItems';

@Injectable()
export class MenusData {
    result: any;
    data: Observable<any>;

    constructor(private http: HttpClient, private storage: Storage) {}

    getMenusData(){
      let menu = [];
      console.log("In /getMenus");
      var url = 'https://foodie1234.herokuapp.com/getMenus';
      this.data = this.http.get(url);
      this.data.subscribe(data => {
      this.result = data;
      for(var i = 0; i < this.result.length; i++){
        menu.push(new Menu(
          this.result[i].menuId,
          this.result[i].menuName,
          this.result[i].menu_category,
          this.result[i].menu_image
         ));
        }
        this.storage.set('Menus', menu);
      });
    }
    
    getMenuItemsData(){
      let menuItems = [];
      console.log("In /getMenuItems");
      var url = 'https://foodie1234.herokuapp.com/getMenuItems';
      this.data = this.http.get(url);
      this.data.subscribe(data => {
      this.result = data;
      for(var i = 0; i < this.result.length; i++){
        menuItems.push(new MenuItems(
          this.result[i].menuItem,
          this.result[i].price,
          this.result[i].menuImg,
          this.result[i].menuId
         ));
        }
        this.storage.set('MenuItems', menuItems);
      });
    }
}
