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

  public urlAPI: string = "https://localhost:44391/api/Alunos";
  public urlAPIUpload: string = "https://localhost:44391/api/Upload";
  public nomeArquivo: any;
  files: File | undefined;

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

  onSelectFile(event: any) {
   // console.log(event)
  
    //this.nomeArquivo = <FileList>event.srcElement.files;
    this.nomeArquivo = event.target.files;
    this.files = this.nomeArquivo[0];
  }

  onUpload(){
    const fileUpload = this.files as File;
    const formData = new FormData();
    formData.append('file',fileUpload);
    this.http.post(this.urlAPIUpload,formData).subscribe(
      response=>{
        //
        console.log(response);
      },
      error=> {
        console.log(error);
      }

    )

  }



}
