import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
<<<<<<< HEAD
import { ListarLecturaComponent } from './components/lectura/listar-lectura/listar-lectura.component';
import { ListarlecturapormoduloComponent } from './components/lectura/listarlecturapormodulo/listarlecturapormodulo.component';
import { ListarquizzpormoduloComponent } from './components/quizz/listarquizzpormodulo/listarquizzpormodulo.component';
import { ListaralternativaporpreguntaComponent } from './components/alternativa/listaralternativaporpregunta/listaralternativaporpregunta.component';
import { ListarpreguntaporquizzComponent } from './components/pregunta/listarpreguntaporquizz/listarpreguntaporquizz.component';
import { InformacionModuloComponent } from './components/modulo/informacion-modulo/informacion-modulo.component';
import { ListarmoduloporunidadComponent } from './components/modulo/listarmoduloporunidad/listarmoduloporunidad.component';
import { InformacionunidadComponent } from './components/unidad/informacionunidad/informacionunidad.component';
import { ContenidoLecturaComponent } from './components/lectura/contenido-lectura/contenido-lectura.component';
=======
>>>>>>> main

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
<<<<<<< HEAD
    path: 'entidades',
    component: EntidadesComponent,
    children: [
      {
        path: 'alternativa',
        component: AlternativaComponent,
        children: [
          { path: 'nuevo', component: CreaeditaAlternativaComponent },
          { path: 'ediciones/:id', component: CreaeditaAlternativaComponent },
        ],
      },
      {
        path: 'estudiante',
        component: EstudianteComponent,
        children: [
          { path: 'nuevo', component: CreaeditaEstudianteComponent },
          { path: 'ediciones/:id', component: CreaeditaEstudianteComponent },
        ],
      },
      {
        path: 'lectura',
        component: LecturaComponent,
        children: [
          { path: 'nuevo', component: CreaeditaLecturaComponent },
          { path: 'ediciones/:id', component: CreaeditaLecturaComponent },
          { path: 'contenido/:id', component: ContenidoLecturaComponent}
        ],
      },
      {
        path: 'modulo',
        component: ModuloComponent,
        children: [
          { path: 'nuevo', component: CreaeditaModuloComponent },
          { path: 'ediciones/:id', component: CreaeditaModuloComponent },
        ],
      },
      {
        path: 'pregunta',
        component: PreguntaComponent,
        children: [
          { path: 'nuevo', component: CreaeditaPreguntaComponent },
          { path: 'ediciones/:id', component: CreaeditaPreguntaComponent },
        ],
      },
      {
        path: 'preguntaalternativa',
        component: PreguntaalternativaComponent,
        children: [
          { path: 'nuevo', component: CreaeditaPreguntaalternativaComponent },
          {
            path: 'ediciones/:id',
            component: CreaeditaPreguntaalternativaComponent,
          },
        ],
      },
      {
        path: 'progreso',
        component: ProgresoComponent,
        children: [
          { path: 'nuevo', component: CreaeditaProgresoComponent },
          { path: 'ediciones/:id', component: CreaeditaProgresoComponent },
        ],
      },
      {
        path: 'proyecto',
        component: ProyectoComponent,
        children: [
          { path: 'nuevo', component: CreaeditaProyectoComponent },
          { path: 'ediciones/:id', component: CreaeditaProyectoComponent },
        ],
      },
      {
        path: 'quizz',
        component: QuizzComponent,
        children: [
          { path: 'nuevo', component: CreaeditaQuizzComponent },
          { path: 'ediciones/:id', component: CreaeditaQuizzComponent },
        ],
      },
      {
        path: 'role',
        component: RoleComponent,
        children: [
          { path: 'nuevo', component: CreaeditaRoleComponent },
          { path: 'ediciones/:id', component: CreaeditaRoleComponent },
        ],
      },
      {
        path: 'unidad',
        component: UnidadComponent,
        children: [
          { path: 'nuevo', component: CreaeditaUnidadComponent },
          { path: 'ediciones/:id', component: CreaeditaUnidadComponent },
        ],
      },
      {
        path: 'unidadmodulo',
        component: UnidadmoduloComponent,
        children: [
          { path: 'nuevo', component: CreaeditaUnidadmoduloComponent },
          { path: 'ediciones/:id', component: CreaeditaUnidadmoduloComponent },
        ],
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          { path: 'nuevo', component: CreaeditaUsersComponent },
          { path: 'ediciones/:id', component: CreaeditaUsersComponent },
        ],
      },
      {
        path: 'video',
        component: VideoComponent,
        children: [
          { path: 'nuevo', component: CreaeditaVideoComponent },
          { path: 'ediciones/:id', component: CreaeditaVideoComponent },
        ],
      },
      {
        path: 'cursounidad',
        component: CursounidadComponent,
        children: [
          { path: 'nuevo', component: CreaeditaCursounidadComponent },
          { path: 'ediciones/:id', component: CreaeditaCursounidadComponent },
        ],
      },
      {
        path: 'curso',
        component: CursoComponent,
        children: [
          { path: 'nuevo', component: CreaeditaCursoComponent },
          { path: 'ediciones/:id', component: CreaeditaCursoComponent },
        ],
      },
    ],
  },
=======
    path: 'components',
    loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule),
  }
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
