import { HttpClient } from '@angular/common/http';
import { Component,Input, OnChanges, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  public urlAPI: string = "https://localhost:7146/api/Alunos";

  public urlImagem: string = "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg";
  public alunos: any=[];
  public alunosFiltrados: any = [];

  private idSelected: number = 0;

  constructor(private http: HttpClient, private modalService: BsModalService) { }

  valorDigitado = '';

  confirmaExclusaoRef: BsModalRef | undefined;

  //Variável vinda do alnos.component.html
  @ViewChild('confirmaExclusao') confirmaExclusao: any;

  public margemImg: number = 2;
  public larguraImg: number = 50;
  public mostrarImg: boolean = true;

  private _filtroLista: string= '';


  public get filtroLista(){
    return this._filtroLista
  }

  public set filtroLista(value: string){
    this._filtroLista = value;

    this.alunosFiltrados = this.filtroLista ? this.filtrarAlunos(this._filtroLista) : this.alunos;
  }

  filtrarAlunos(filtro: string): any{
    filtro = filtro.toLocaleLowerCase();
    return this.alunos.filter(
     (aluno:any) => aluno.nome.toLocaleLowerCase().indexOf(filtro) != -1
    )
  }

  ngOnInit(): void {
    this.getAlunos();
  }

  getMostarOcultarImg(){
    this.mostrarImg = !this.mostrarImg;
  }

  getKey(evento: KeyboardEvent){
    this.valorDigitado = (<HTMLInputElement>evento.target).value
  }

  public getAlunos():void{
    this.http.get(this.urlAPI).subscribe(
      response => {
        this.alunos = response;
        this.alunosFiltrados = this.alunos;
      },
      error => console.log(error)
    );

  }

  removerItem(id:number){
    this.idSelected = id;
    this.confirmaExclusaoRef = this.modalService.show(this.confirmaExclusao, {class: 'modal-sm'});
    /*
    this.http.delete(this.urlAPI+"/"+id).subscribe(
      response=>{
        this.getAlunos();
      },
      error=>{

      }
    )
    */

  }

  onConfirm(){
    this.http.delete(this.urlAPI+"/"+this.idSelected).subscribe(
      response=>{
        this.getAlunos();
      },
      error=>{
        console.log(error)
      }
    )
    this.confirmaExclusaoRef?.hide();
  }

  onDecline(){
    this.confirmaExclusaoRef?.hide();
  }

}
