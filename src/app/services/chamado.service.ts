import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private http: HttpClient;

  constructor(http: HttpClient) { 
    this.http = http;
  }

  findAll(): Observable<Chamado[]> {
       return this.http.get<Chamado[]>(`${API_CONFIG.serviceUrl}/chamados`);
  }
}
