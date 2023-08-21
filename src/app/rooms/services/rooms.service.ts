import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = [
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

  constructor() { }

  getRooms () {
    return this.roomList;
  }
}
