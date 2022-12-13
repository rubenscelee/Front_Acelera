import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './Aluno/alunos/alunos.component';
import { CadastroAlunosComponent } from './Aluno/cadastro-alunos/cadastro-alunos.component';
import { CadastroProfessorComponent } from './Professor/cadastro-professor/cadastro-professor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './_shared/_utils/error/error.component';
import { ProfessorComponent } from './Professor/professores/professor.component';
import { MateriaComponent } from './Cadastro/materia/materia.component';
import { EditarAlunosComponent } from './Aluno/editar-alunos/editar-alunos.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch:'full'},
  {path: 'Aluno/Lista', component: AlunosComponent},
  {path: 'Aluno/Cadastro', component: CadastroAlunosComponent},
  {path: 'Aluno/Editar/:id', component: EditarAlunosComponent},
  {path: 'lista-professores', component: ProfessorComponent},
  {path: 'cadastro-professores', component: CadastroProfessorComponent},
  {path: 'lista-materias', component:MateriaComponent},
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '404' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
