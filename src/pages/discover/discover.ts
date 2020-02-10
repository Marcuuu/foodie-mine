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
      console.log(data)
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

  sortProfiles($event) {
    if ($event == "distance_closest") {
      this.profileList.sort((a, b) => (a.location_distance > b.location_distance) ? 1 : -1)
    }
    else if ($event == "distance_furthest") {
      this.profileList.sort((a, b) => (b.location_distance > a.location_distance) ? 1 : -1)
    }
    else if ($event == "price_low_high") {
      this.profileList.sort((a, b) => (a.menu_price > b.menu_price) ? 1 : -1)
    }
    else if ($event == "price_high_low") {
      this.profileList.sort((a, b) => (b.menu_price > a.menu_price) ? 1 : -1)
    }
    else if ($event == "reviews_low_high") {
      this.profileList.sort((a, b) => (a.menu_ratings > b.menu_ratings) ? 1 : -1)
    }
    else if ($event == "reviews_high_low") {
      this.profileList.sort((a, b) => (a.menu_ratings < b.menu_ratings) ? 1 : -1)
    }
  }
}
