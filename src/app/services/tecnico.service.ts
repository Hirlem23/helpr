import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../model/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
      this.http = http;
   }

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseUrl}/tecnicos`);
  }
}
