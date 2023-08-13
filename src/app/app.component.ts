import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // inline html muiltiline inline template
  template: `<h1>Hello world from inline template</h1>
  <p>Learning Angular is fun! Sober up!</p>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
