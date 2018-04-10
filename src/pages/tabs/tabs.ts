import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots : Object[];

  constructor() {
      this.tabRoots=[
        {
            root : HomePage,
            tabTitle : '主页',
            tabIcon : 'home'
        },
        {
          root : ContactPage,
          tabTitle : '我的',
          tabIcon : 'person'
        }
      ];
  }
}
