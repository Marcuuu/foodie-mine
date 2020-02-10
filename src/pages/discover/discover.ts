import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MenuDetailsPage } from "../menu-details/menu-details";

@Component({
  selector: "page-discover",
  templateUrl: "discover.html"
})
export class DiscoverPage {
  profileList: any;
  data: Observable<any>;
  subscription: any;
  constructor(public navCtrl: NavController, private http: HttpClient) {}

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    var url = "https://foodie1234.herokuapp.com/discoverprofiles";
    this.data = this.http.get(url);
    this.subscription = this.data.subscribe(data => {
      this.profileList = data;
    });
  }

  getItems(ev: any) {
    this.ngOnInit();
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.subscription.unsubscribe();
      this.profileList = this.profileList.filter(item =>
        item.menuName.toLowerCase().includes(val.toLowerCase())
      );
    }
    else {
      this.ngOnInit();
    }
  }

  goToMenuDetailsPage(event, item) {
    this.navCtrl.push(MenuDetailsPage, {
      item: item
    });
    console.log(item)
  }
}
