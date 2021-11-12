import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../shared/models/film';
import { FilmService } from '../shared/services/film.service';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  films: Film[] = []

  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    // récupération en asynchrone des params de l'url
    this.route.params.subscribe((params) => {
      console.log(params);
    })

    // Récupérer une liste de 250 films
    this.filmService.getFilms()
    .subscribe((films: Film[]) => {
      this.films = films;
    })

  }

}
