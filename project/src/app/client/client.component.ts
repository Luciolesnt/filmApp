import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../shared/models/client';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[] = []

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
    })
  
    // Récupérer une liste de 250 films
    this.clientService.getClients()
    .subscribe((clients: Client[]) => {
      this.clients = clients;
    })
  }

}
