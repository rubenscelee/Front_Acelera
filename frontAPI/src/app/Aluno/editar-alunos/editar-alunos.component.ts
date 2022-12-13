import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-alunos',
  templateUrl: './editar-alunos.component.html',
  styleUrls: ['./editar-alunos.component.scss']
})
export class EditarAlunosComponent implements OnInit {

  public urlAPI: string = "https://localhost:7146/api/Alunos";
  public aluno: any = [];
  public mensagem:string = '';
  public id:number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAlunos(this.id);

  }

  getAlunos(id:Number){
    this.http.get(this.urlAPI + '/' + id).subscribe(
      response=> {
        console.log(response);
        this.aluno = response;
      },
      error=>{
        console.log(error);
      }
    )
  }

  salvarForm(form: NgForm){

    console.log(form.value);
    this.http.put(this.urlAPI + "/" + this.id, form.value).subscribe(
      response => {
        console.log (response);
        this.mensagem = 'Salvo com sucesso!';

      },
      error => {
        console.log(error);
        this.mensagem ='Não foi possivel salvar.';
      }
    );

    console.log(form.value);

  }

}
