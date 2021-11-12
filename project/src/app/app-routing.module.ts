import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FilmComponent } from './film/film.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomComponent } from './room/room.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';

const routes: Routes = [
  { path: "", redirectTo: "film", pathMatch: "full" },
  { path: "film", component: FilmComponent },
  { 
    path: "client", 
    children: [
      {path: "", component: ClientComponent, pathMatch: "full"},
      { path: "new", component: ClientCreateComponent, pathMatch: "full" },
    ] },
  { path: "room", component: RoomComponent },
  { path: "reservation", component: ReservationComponent },
    // WildCards
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
