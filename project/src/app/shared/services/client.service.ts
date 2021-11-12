import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${environment.apiUrl}/clients`, client);
  }

}
