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

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList : RoomList[] = [{
    roomType : "Deluxe Room",
    amenities : "Air conditioner, wifi, kitchen,bathroom,tv",
    price : 1000,
    photos : "https://rb.gy/t0hqa",
    checkinTime : new Date("11-12-2022"),
    checkoutTime : new Date("30-12-2022")
  },
  {
    roomType : "Single Room",
    amenities : "Air conditioner, wifi, kitchen,bathroom,tv",
    price : 500,
    photos : "https://rb.gy/t0hqa",
    checkinTime : new Date("11-08-2022"),
    checkoutTime : new Date("30-09-2022")
  },
  {
    roomType : "Private Suite",
    amenities : "Air conditioner, wifi, kitchen,bathroom,tv",
    price : 1500,
    photos : "https://rb.gy/t0hqa",
    checkinTime : new Date("11-06-2022"),
    checkoutTime : new Date("30-07-2022")
  }
]


  constructor () {}
  ngOnInit(): void {
  }
  toggle () {
    this.hideRooms = !this.hideRooms;
  }
}
