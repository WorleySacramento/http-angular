import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  notFound: boolean = false;
  id?: number;
  form: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    concluida: new FormControl(false)
  })

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    const tarefa: Tarefa = this.form.value, id = this.id;
    this.tarefaService.editTarefa(id!, tarefa).subscribe({
      next:() =>this.router.navigate(['/tarefas']), 
      error:(err) =>{
        alert('Erro ao editar a tarefa. Por favor, tente novamente.');
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next:(params =>{
        this.id = Number(params['id']);
        this.tarefaService.getTarefa(this.id).subscribe({
          next:(tarefa) =>{
            this.form.patchValue(tarefa);
          },
          error:(error) =>{
            this.notFound = true;
          }
        })
      })
    })
  }
}
