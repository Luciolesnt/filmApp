import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
import { Room } from 'src/app/shared/models/room';
import { RoomService } from 'src/app/shared/services/room.service';
import { FilmService } from 'src/app/shared/services/film.service'
@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {

  @Input() room!: Room;

  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  filmId!: string;
  
  @Input() film!: Film;

  constructor(private route: ActivatedRoute, private roomService: RoomService,  private filmService: FilmService ,private router: Router) { }

  ngOnInit(): void {
    this.filmId = this.room.film_id;
    this.filmService.getFilm(this.filmId)
    .subscribe((film: Film) => {
      this.film = film
    });
  }
  
  deleteRoom(): void {
    this.roomService.deleteRoom(this.room)
    .subscribe((_)=>{
      this.deleteEmitter.emit()
      })
    }

}
