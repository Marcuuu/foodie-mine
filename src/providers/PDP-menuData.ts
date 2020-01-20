import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Menu } from '../models/PDP-Menus';

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
          this.result[i].custName,
          this.result[i].bookDate,
          this.result[i].bookTime,
          this.result[i].bookPax,
          this.result[i].bookNotes,
         ));
        }
        this.storage.set('Menus', menu);
      });
    }
}
