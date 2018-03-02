import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: any = {
    name: '李先生',
    profileImage: 'assets/imgs/user.jpg',
    phonenumber: '18874483716',
    money: '0.0',
    quantity: '3',
    card: '停车新秀'
  };

  vm: any = {
    msgNum: 3
  };

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  onMessage() {

  }

  onBill() {

  }

  onInvite() {

  }

  onBind() {

  }
}
