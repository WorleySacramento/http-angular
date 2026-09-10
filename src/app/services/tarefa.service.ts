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

  addTarefa(tarefa: Tarefa): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/tarefas`, tarefa);
  }


    getTarefa(id: number):Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/tarefas/${id}`);
  }



  // editTarefa(id:number): Observable<Tarefa> {
  //   return this.http.put<Tarefa>(`${this.baseUrl}/tarefas/${id}`);
  // }
}
