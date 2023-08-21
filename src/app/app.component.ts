import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef

ngOnInit(): void {
    (this.name.nativeElement.innerText = "Danret Hotel");
}

  // role = 'Users';
  // @ViewChild('user', { read: ViewContainerRef } ) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.noOfRooms = 50;
  // }


}
