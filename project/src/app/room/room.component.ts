import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../shared/models/room';
import { RoomService } from '../shared/services/room.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  rooms: Room[] = []


  constructor(private route: ActivatedRoute, private roomService: RoomService,  private router: Router) { }

  ngOnInit(): void {
    this.refreshRooms();
  }
  
  
  refreshRooms(): Subscription {
    return this.roomService.getRooms()
    .subscribe((rooms: Room[]) => {
      console.log(rooms)
      this.rooms = rooms
    });
  }
  
  

}