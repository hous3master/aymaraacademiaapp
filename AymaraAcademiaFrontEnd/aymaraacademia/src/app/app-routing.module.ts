import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// For each entity, you must import the related components
import { ModuloComponent } from './components/modulo/modulo.component';
import { CreaeditaModuloComponent } from './components/modulo/creaedita-modulo/creaedita-modulo.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { CreaeditaUnidadComponent } from './components/unidad/creaedita-unidad/creaedita-unidad.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { CursoComponent } from './components/curso/curso.component';
import { CreaeditaCursoComponent } from './components/curso/creaedita-curso/creaedita-curso.component';
import { AlternativaComponent } from './components/alternativa/alternativa.component';
import { CreaeditaAlternativaComponent } from './components/alternativa/creaedita-alternativa/creaedita-alternativa.component';

const routes: Routes = [
// For each entity, you must create a path that will be used to navigate to the related components
{
path: 'modulo', component: ModuloComponent, children: [
{path: 'nuevo', component: CreaeditaModuloComponent},
{path: 'ediciones/:id',component:CreaeditaModuloComponent}
]
},
{
path: 'unidad', component: UnidadComponent, children: [
{path: 'nuevo', component: CreaeditaUnidadComponent},
{path: 'ediciones/:id',component:CreaeditaUnidadComponent}
]
},
{
path: 'users', component: UsersComponent, children: [
{path: 'nuevo', component: CreaeditaUsersComponent},
{path: 'ediciones/:id',component:CreaeditaUsersComponent}
]
},
{
path: 'curso', component: CursoComponent, children: [
{path: 'nuevo', component: CreaeditaCursoComponent},
{path: 'ediciones/:id',component:CreaeditaCursoComponent}
]
},
{
path: 'alternativa', component: AlternativaComponent, children: [
{path: 'nuevo', component: CreaeditaAlternativaComponent},
{path: 'ediciones/:id',component:CreaeditaAlternativaComponent}
]
},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
