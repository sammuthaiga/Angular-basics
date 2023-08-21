import { Room } from './../rooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // implement change detection strategy in an .OnPush mode
  // this ensures that that change is not triggered for this
  // component unless needed.
  changeDetection: ChangeDetectionStrategy.OnPush
})
  export class RoomsListComponent  implements OnInit, OnChanges {

    @Input() rooms: RoomList[] = [];
   
    @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor () {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {

  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
