import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { MakeBookingPage } from "../../pages/make-booking/make-booking";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-menu-details",
  templateUrl: "menu-details.html"
})
export class MenuDetailsPage {
  details: any;

  menuList: any;
  menuData: Observable<any>;
  showImage = false;
  popupSrc: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {
    this.details = navParams.get("item");
  }

  ngOnInit() {
    this.getMenu();
  }

  ionViewWillEnter() {
    let body = document.getElementsByTagName("BODY")[0];
    body.classList.add("details-active");
  }

  ionViewWillLeave() {
    let body = document.getElementsByTagName("BODY")[0];
    body.classList.remove("details-active");
  }

  goToMakeBookingPage(event, item) {
    this.navCtrl.push(MakeBookingPage, {
      item: item
    });
  }

  getMenu() {
    var url = "https://elp-tutorial.herokuapp.com/getmenu";
    this.menuData = this.http.get(url);
    this.menuData.subscribe(data => {
      this.menuList = data.filter(word => {
        if (word.menuName == this.details.menuName) {
          return word;
        }
      });
    });
  }

  popupImage(event) {
    if (!this.showImage == true) {
      let imgSrc = event.srcElement.src;
      this.popupSrc = imgSrc;
      console.log(this.popupSrc);
    }
    this.showImage = !this.showImage;
  }
}
