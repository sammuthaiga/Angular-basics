import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
   templateUrl: './app.component.html',
  // inline html muiltiline inline template
  // template: `<h1>Hello world from inline template</h1>
  // <p>Learning Angular is fun! Sober up!</p>
  // `,
   styleUrls: ['./app.component.scss'],
//   styles: [`h1 {
//     color: Red;
//     font-size: 128px;
//     font-weight: bold;}`]
 })
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Users';
}
