import { ListarVideoPorModuloComponent } from './components/video/listar-video-por-modulo/listar-video-por-modulo.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// For each entity, you must import the related components
import { AlternativaComponent } from './components/alternativa/alternativa.component';
import { CreaeditaAlternativaComponent } from './components/alternativa/creaedita-alternativa/creaedita-alternativa.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { CreaeditaEstudianteComponent } from './components/estudiante/creaedita-estudiante/creaedita-estudiante.component';
import { LecturaComponent } from './components/lectura/lectura.component';
import { CreaeditaLecturaComponent } from './components/lectura/creaedita-lectura/creaedita-lectura.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { CreaeditaModuloComponent } from './components/modulo/creaedita-modulo/creaedita-modulo.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { CreaeditaPreguntaComponent } from './components/pregunta/creaedita-pregunta/creaedita-pregunta.component';
import { PreguntaalternativaComponent } from './components/preguntaalternativa/preguntaalternativa.component';
import { CreaeditaPreguntaalternativaComponent } from './components/preguntaalternativa/creaedita-preguntaalternativa/creaedita-preguntaalternativa.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { CreaeditaProgresoComponent } from './components/progreso/creaedita-progreso/creaedita-progreso.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CreaeditaProyectoComponent } from './components/proyecto/creaedita-proyecto/creaedita-proyecto.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { CreaeditaQuizzComponent } from './components/quizz/creaedita-quizz/creaedita-quizz.component';
import { RoleComponent } from './components/role/role.component';
import { CreaeditaRoleComponent } from './components/role/creaedita-role/creaedita-role.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { CreaeditaUnidadComponent } from './components/unidad/creaedita-unidad/creaedita-unidad.component';
import { UnidadmoduloComponent } from './components/unidadmodulo/unidadmodulo.component';
import { CreaeditaUnidadmoduloComponent } from './components/unidadmodulo/creaedita-unidadmodulo/creaedita-unidadmodulo.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { VideoComponent } from './components/video/video.component';
import { CreaeditaVideoComponent } from './components/video/creaedita-video/creaedita-video.component';
import { CursounidadComponent } from './components/cursounidad/cursounidad.component';
import { CreaeditaCursounidadComponent } from './components/cursounidad/creaedita-cursounidad/creaedita-cursounidad.component';
import { CursoComponent } from './components/curso/curso.component';
import { CreaeditaCursoComponent } from './components/curso/creaedita-curso/creaedita-curso.component';
import { EntidadesComponent } from './components/entidades/entidades.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListarLecturaComponent } from './components/lectura/listar-lectura/listar-lectura.component';
import { ListarlecturapormoduloComponent } from './components/lectura/listarlecturapormodulo/listarlecturapormodulo.component';
import { ListarquizzpormoduloComponent } from './components/quizz/listarquizzpormodulo/listarquizzpormodulo.component';
import { ListaralternativaporpreguntaComponent } from './components/alternativa/listaralternativaporpregunta/listaralternativaporpregunta.component';
import { ListarpreguntaporquizzComponent } from './components/pregunta/listarpreguntaporquizz/listarpreguntaporquizz.component';
import { InformacionModuloComponent } from './components/modulo/informacion-modulo/informacion-modulo.component';
import { ListarmoduloporunidadComponent } from './components/modulo/listarmoduloporunidad/listarmoduloporunidad.component';
import { InformacionunidadComponent } from './components/unidad/informacionunidad/informacionunidad.component';
import { ContenidoLecturaComponent } from './components/lectura/contenido-lectura/contenido-lectura.component';

const routes: Routes = [
  // For each entity, you must create a path that will be used to navigate to the related components
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'informacionunidad/:idUnidad',
    component: InformacionunidadComponent,
    children: [
      {
        path: 'modulo/:idModulo',
        component: InformacionModuloComponent,
      },
    ]
  },
  {
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
