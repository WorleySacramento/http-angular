import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  id?: number;
  form: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    concluida: new FormControl(false)
  })

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute
  ) { }

  onSubmit() {

  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next:(params =>{
        this.id = Number(params['id']);
        this.tarefaService.getTarefa(this.id).subscribe({
          next:(tarefa) =>{
            this.form.patchValue(tarefa);
          }
        })
      })
    })
  }
}
