import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.scss']
})
export class CadastroProfessorComponent implements OnInit {
  public urlApi: string = "https://localhost:44391/api/Professores";
  
  constructor(private http: HttpClient ) {}


  ngOnInit(): void {
  }

  //Enviar dados para o banco de dados via API
  salvarForm(professor: NgForm){
    this.http.post(this.urlApi,professor.value).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
      );

  }
}
