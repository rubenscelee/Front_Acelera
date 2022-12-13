import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.scss']
})
export class CadastroAlunosComponent implements OnInit {
  //TODO - CAMPO FOTO (PEGAR NOME=>SALVAR NA PASTA)

  public urlAPI: string = "https://localhost:7146/api/Alunos";

  aluno: any;

  public mensagem:string = '';


  constructor(private http: HttpClient) { }

  //Primeira vez que é carregado -> executado antes da página
  ngOnInit(): void {
    this.aluno = {};

  }

  salvarForm(aluno: any){
    //salve na API
    console.log(aluno.value);
    this.http.post(this.urlAPI,aluno.value).subscribe(
      response => {
        console.log (response);
        this.mensagem = 'Salvo com sucesso!';

      },
      error => {
        console.log(error);
        this.mensagem ='Não foi possivel salvar.';
      }
    );

  }

  onSelectFile(event: any){
    console.log(event)

    const nomeArquivo = <FileList>event.srcElement.files;

    console.log(nomeArquivo[0].name)
  }



}
