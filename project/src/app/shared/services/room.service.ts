import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${environment.apiUrl}/salles`);
  }

  deleteRoom(room: Room): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/salles/${room.id}`)
  }
}
