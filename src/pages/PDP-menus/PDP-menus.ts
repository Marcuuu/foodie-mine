import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MenuPage } from "../PDP-menu/PDP-menu";
import { NewMenuPage } from "../PDP-new-menu/PDP-new-menu";
import { Menu } from "../../models/PDP-Menus";
import { Storage } from "@ionic/storage";
import { Profile } from "../../models/PDP-Profile";
import * as $ from "jquery";

@Component({
  selector: "page-PDP-menus",
  templateUrl: "PDP-menus.html"
})
export class MenusPage {
  profiles: Profile[];
  profile: Profile;
  menus: Menu[];

  constructor(public navCtrl: NavController, private storage: Storage) {}

  ionViewWillEnter() {
    let id = localStorage.getItem("loginid");
    this.storage.get("Profile").then(val => {
      console.log(val);
      this.profiles = val;
      for (var i = 0; i < this.profiles.length; i++) {
        if (this.profiles[i].id == id) {
          this.profile = this.profiles[i];
        }
      }
      console.log("Get Profile completed");
      console.log(this.profile);
    });
    this.storage.get("Menus").then(val => {
      console.log(val);
      this.menus = val;
      console.log("Get Menus completed");
    });
  }

  ionViewDidLoad() {
    this.setCardHeight();
  }

  resizeEvent(event) {
    let winWidth = event.target.innerWidth;
    if (winWidth >= 768) {
      let tallest = -1;
      $(".menu-card-each .menu-card-img").attr("style", "");
      $(".menu-card-each .menu-card-img").each(function() {
        tallest =
          $(this).outerHeight() > tallest ? $(this).outerHeight() : tallest;
      });
      $(".menu-card-each .menu-card-img").each(function() {
        $(this).css("height", tallest);
      });
    } else {
      $(".menu-card-each .menu-card-img").attr("style", "");
    }
  }

  setCardHeight() {
    if ($(window).width() >= 768) {
      let tallest = -1;
      $(".menu-card-each .menu-card-img").attr("style", "");
      $(".menu-card-each .menu-card-img").each(function() {
        tallest =
          $(this).outerHeight() > tallest ? $(this).outerHeight() : tallest;
      });
      $(".menu-card-each .menu-card-img").each(function() {
        $(this).css("height", tallest);
      });
    } else {
      $(".menu-card-each .menu-card-img").attr("style", "");
    }
  }

  goToMenu(menu) {
    this.navCtrl.push(MenuPage, {
      data: menu
    });
  }
  goToNewMenu() {
    this.navCtrl.push(NewMenuPage, {
      data: this.profile.id
    });
  }
}
