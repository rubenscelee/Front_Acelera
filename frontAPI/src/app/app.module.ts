import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//APPs
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Bibliotecas externas
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

//Copartilhados - Layout
import { NavComponent } from './_shared/_layout/nav/nav.component';
import { FooterComponent } from './_shared/_layout/footer/footer.component';
import { ModalconfirmComponent } from './_shared/_utils/modalconfirm/modalconfirm.component';

//Paginas do sistemas
import { AlunosComponent } from './Aluno/alunos/alunos.component';
import { AulasComponent } from './aulas/aulas.component';
import { ProfessorComponent } from './Professor/professores/professor.component';
import { CadastroAlunosComponent } from './Aluno/cadastro-alunos/cadastro-alunos.component';
import { CadastroProfessorComponent } from './Professor/cadastro-professor/cadastro-professor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './_shared/_utils/error/error.component';
import { MateriaComponent } from './Cadastro/materia/materia.component';
import { EditarAlunosComponent } from './Aluno/editar-alunos/editar-alunos.component';



@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AulasComponent, 
    NavComponent,
    FooterComponent,
    ProfessorComponent,
    CadastroAlunosComponent,
    CadastroProfessorComponent,
    DashboardComponent,
    ErrorComponent,
    MateriaComponent,
    EditarAlunosComponent,
    ModalconfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
