import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Hilton'
  noOfRooms = 10;

  hideRooms = false;

  selectedRoom! : RoomList

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title= "Room List";

  roomList : RoomList[] = [];
  @ViewChild(HeaderComponent) headercomponent!: HeaderComponent;
  
  constructor (private roomsService : RoomsService) {}

  ngOnInit(): void {
    // console.log(this.headercomponent)
    this.roomList = this.roomsService.getRooms()

  }

  ngAfterViewInit(): void {
    this.headercomponent.title = "Rooms view"
  }
  toggle () {
    this.hideRooms = !this.hideRooms;
    this.title= "Rooms List";
  }

  selectRoom(room :RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room:RoomList = {
      roomNumber: 4,
      roomType: "deulex",
      amenities:"Air conditioner, wifi, tv",
      price: 500,
      photos: "https://rb.gy/t0hqa",
      checkinTime: new Date('11-27-2021'),
      checkoutTime: new Date('11-27-2021'),
      rating:4.5
    }
    // this.roomList.push(room);
    // Use the spread operator
    this.roomList = [...this.roomList, room]
  }
}
