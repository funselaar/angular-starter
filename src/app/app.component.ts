import { Component } from '@angular/core';
import { MenuItem } from './components/nav/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: MenuItem[] = [
    { link: '/dashboard', title: 'Dashboard' },
    { link: '/table', title: 'Table' },
  ]

}
