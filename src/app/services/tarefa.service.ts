import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTarefas():Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseUrl}/tarefas`);
  }
}
