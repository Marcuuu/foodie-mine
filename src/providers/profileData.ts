import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Profile } from '../models/Profile';

@Injectable()
export class ProfileData {
    result: any;
    data: Observable<any>;

    constructor(private http: HttpClient, private storage: Storage) {
      let profile = [];
      console.log("In /getProfile");
      var url = 'https://foodie1234.herokuapp.com/getProfile';
      this.data = this.http.get(url);
      this.data.subscribe(data => {
      this.result = data;
      for(var i = 0; i < this.result.length; i++){
        profile.push(new Profile(
          this.result[i].fName,
          this.result[i].desc,
          this.result[i].add,
          this.result[i].phone,
          this.result[i].email,
          this.result[i].image
         ));
        }
        storage.set('Profile', profile);
      });
    }
}
