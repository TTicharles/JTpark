import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OnparkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onpark',
  templateUrl: 'onpark.html',
})
export class OnparkPage {

  park: any = {
    left: 288,
    price: 10,
    address: "张家界步行街中商广场地下一楼",
    item: "/355",
    items: "元/30分钟"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnparkPage');
  }

  items = [];
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.items = [];
      for (var i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
