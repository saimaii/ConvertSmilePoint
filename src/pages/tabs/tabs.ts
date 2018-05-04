import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ConvertSmilePointPage } from '../convertSmilePoint/convertSmilePoint';
import { HomePage } from '../home/home';
import { NewsPage } from'../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ConvertSmilePointPage;
  tab4Root = NewsPage;

  constructor() {

  }
}
