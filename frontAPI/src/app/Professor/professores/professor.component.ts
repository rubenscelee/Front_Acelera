import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  public urlApi: string = "https://localhost:44391/api/Professores";
  public professores: any = [];
  public professoresFiltrados: any = [];
  private _filtroLista : string = '';
  public get filtroLista() : string {
    return this._filtroLista;
  }
  public set filtroLista(v : string) {
    this._filtroLista = v;
    this.professoresFiltrados = this.filtroLista ? this.filtrarProfessores(this._filtroLista) : this.professores;
  }
  filtrarProfessores(filtro: string): any {
    filtro = filtro.toLocaleLowerCase();
    return this.professores.filter(
      (professor: any) => professor.nome.toLocaleLowerCase().indexOf(filtro) != -1
    )
  }
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getProfessores();
  }
  public getProfessores(): void {
    this.http.get(this.urlApi).subscribe(
      response => {
        this.professores = response;
        this.professoresFiltrados = this.professores;
      },
      error => console.log(error)
    );
  }

  removerItem(id:number){
    this.http.delete(this.urlApi + '/' + id).subscribe(
      response=> {
        this.getProfessores();
      },
      error=>{

      }
    )

    
  }

}
