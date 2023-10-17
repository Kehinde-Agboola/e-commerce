import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerce';

  MenuItems = [
    {
      label: 'Collections',
    },
    {
      label: 'Men',
    },
    {
      label: 'Women',
    },
    {
      label: 'About',
    },
    {
      label: 'Contact',
    },
  ];
}
