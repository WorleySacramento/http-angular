import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe({
      next: (tarefas) => {
        this.tarefas = tarefas;
        console.log('Tarefas carregadas com sucesso:', this.tarefas);
      }
    });
  }
}
