import { HttpClient } from '@angular/common/http';
import { Component,Input, NO_ERRORS_SCHEMA, OnChanges, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, switchMap, take } from 'rxjs';
import { ModalconfirmComponent } from 'src/app/_shared/_utils/modalconfirm/modalconfirm.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  public urlAPI: string = "https://localhost:44391/api/Alunos";

  public urlImagem: string = "https://images.freeimages.com/images/large-previews/8ca/peerless-chain-1-1641825.jpg";
  public alunos: any=[]; 
  public alunosFiltrados: any = []; 


  constructor(private http: HttpClient, 
  private modalService: BsModalService) { }

  confirmaExclusaoRef: BsModalRef | undefined;
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

    //this.confirmaExclusaoRef = this.modalService.show(this.confirmaExclusao, {class: 'modal-sm'});

   const result$ = this.showConfirm('Confirmação','Realmente deseja excluir?');
   result$?.asObservable()
   .pipe(
    take(1),
    switchMap(async (result) => result ? this.getConfirm(id) : EMPTY)
   ).subscribe(
    response => {
        console.log("SIM")
    }, 
    error => {
      console.log("NÃO")
    }
   )
   
  }

  showConfirm(title: string, msg: string, btnConfirm?: string, btnCancel?:string){
    const bsModalRef: BsModalRef = this.modalService.show(ModalconfirmComponent);
     
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;
    
    if(btnConfirm) {
      bsModalRef.content.btnConfirm = btnConfirm; 
    }

    if(btnCancel) {
      bsModalRef.content.btnCancel = btnCancel; 
    }

    return (<ModalconfirmComponent>bsModalRef.content).confimResult;

  }

  getConfirm(id: number){
    this.http.delete(`${this.urlAPI}/${id}`).subscribe(
      response=>{
        this.getAlunos();
      },
      error=>{
        console.log(error);
      }
    )
    this.confirmaExclusaoRef?.hide(); 
  }

}
