import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
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
  constructor () {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber : 1,
        roomType : "Deluxe Room",
        amenities : "Air conditioner, wifi, kitchen,bathroom,tv",
        price : 1000,
        photos : "https://rb.gy/t0hqa",
        checkinTime : new Date("11-12-2022"),
        checkoutTime : new Date("30-12-2022"),
        rating: 2.8
      },
      {
        roomNumber : 2,
        roomType : "Single Room",
        amenities : "Air conditioner, wifi, kitchen,bathroom,tv",
        price : 500,
        photos : "https://rb.gy/t0hqa",
        checkinTime : new Date("11-08-2022"),
        checkoutTime : new Date("30-09-2022"),
        rating: 3.5
      },
      {
        roomNumber : 3,
        roomType : "Private Suite",
        amenities : "Air conditioner, wifi, kitchen,bathroom,tv",
        price : 1500,
        photos : "https://rb.gy/t0hqa",
        checkinTime : new Date("11-06-2022"),
        checkoutTime : new Date("30-07-2022"),
        rating: 4.5
      }
    ]
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
