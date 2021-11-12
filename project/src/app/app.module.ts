import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FilmComponent } from './film/film.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomComponent } from './room/room.component';
import { ClientComponent } from './client/client.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { FilmCardComponent } from './film/film-card/film-card.component';
import { ClientCardComponent } from './client/client-card/client-card.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { RoomCardComponent } from './room/room-card/room-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmComponent,
    ReservationComponent,
    RoomComponent,
    ClientComponent,
    NotFoundComponent,
    FilmCardComponent,
    ClientCardComponent,
    ClientCreateComponent,
    RoomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
