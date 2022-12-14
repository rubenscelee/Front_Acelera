import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {

  public urlAPI: string = "https://localhost:44391/api/Materias"
  public urlImagem: string = "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg";
  public materias: any = [];
  public materiasFiltrados: any = [];
  constructor(private http: HttpClient) { }

  private _filtroLista: string = '';

  private id: number = 0;

  public get filtroLista() {
    return this._filtroLista
  }
  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.materiasFiltrados = this.filtroLista ? this.filtrarmaterias(this._filtroLista) : this.materias;
  }
  filtrarmaterias(filtro: string): any {
    filtro = filtro.toLocaleLowerCase();
    return this.materias.filter(
      (materia: any) => materia.nome.toLocaleLowerCase().indexOf(filtro) != -1
    )
  }

  ngOnInit(): void {
    this.id =0;
    this.getmaterias();
  }


  public getmaterias(): void {
    this.http.get(this.urlAPI).subscribe(
      response => {
        this.materias = response;
        this.materiasFiltrados = this.materias;
      },
      error => console.log(error)
    );
  }

  salvarForm(form: NgForm) {
      this.http.post(this.urlAPI,form.value).subscribe(
        response => {
          console.log(response);
          this.materiasFiltrados.push(response);
          form.reset();
          this.id = 0;

        },
        error => {
          console.log(error);
        }
      )
  }


  removerItem(id: number) {
    console.log(id);
    this.http.delete(this.urlAPI + '/' + id).subscribe(
      response=> {
        console.log(response);
        this.getmaterias();
      },
      error => {
        console.log(error);
      } 
    )
  }
}
