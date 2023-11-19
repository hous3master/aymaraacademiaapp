import { CreaditaEstudiantecursoComponent } from './estudiantecurso/creadita-estudiantecurso/creadita-estudiantecurso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlternativaComponent } from './alternativa/alternativa.component';
import { CreaeditaAlternativaComponent } from './alternativa/creaedita-alternativa/creaedita-alternativa.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CreaeditaEstudianteComponent } from './estudiante/creaedita-estudiante/creaedita-estudiante.component';
import { LecturaComponent } from './lectura/lectura.component';
import { CreaeditaLecturaComponent } from './lectura/creaedita-lectura/creaedita-lectura.component';
import { ModuloComponent } from './modulo/modulo.component';
import { CreaeditaModuloComponent } from './modulo/creaedita-modulo/creaedita-modulo.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { CreaeditaPreguntaComponent } from './pregunta/creaedita-pregunta/creaedita-pregunta.component';
import { PreguntaalternativaComponent } from './preguntaalternativa/preguntaalternativa.component';
import { CreaeditaPreguntaalternativaComponent } from './preguntaalternativa/creaedita-preguntaalternativa/creaedita-preguntaalternativa.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { CreaeditaProgresoComponent } from './progreso/creaedita-progreso/creaedita-progreso.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { CreaeditaProyectoComponent } from './proyecto/creaedita-proyecto/creaedita-proyecto.component';
import { QuizzComponent } from './quizz/quizz.component';
import { CreaeditaQuizzComponent } from './quizz/creaedita-quizz/creaedita-quizz.component';
import { RoleComponent } from './role/role.component';
import { CreaeditaRoleComponent } from './role/creaedita-role/creaedita-role.component';
import { UnidadComponent } from './unidad/unidad.component';
import { CreaeditaUnidadComponent } from './unidad/creaedita-unidad/creaedita-unidad.component';
import { UnidadmoduloComponent } from './unidadmodulo/unidadmodulo.component';
import { CreaeditaUnidadmoduloComponent } from './unidadmodulo/creaedita-unidadmodulo/creaedita-unidadmodulo.component';
import { UsersComponent } from './users/users.component';
import { CreaeditaUsersComponent } from './users/creaedita-users/creaedita-users.component';
import { VideoComponent } from './video/video.component';
import { CreaeditaVideoComponent } from './video/creaedita-video/creaedita-video.component';
import { CursounidadComponent } from './cursounidad/cursounidad.component';
import { CreaeditaCursounidadComponent } from './cursounidad/creaedita-cursounidad/creaedita-cursounidad.component';
import { CursoComponent } from './curso/curso.component';
import { CreaeditaCursoComponent } from './curso/creaedita-curso/creaedita-curso.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { LandingComponent } from './landing/landing.component';
import { ListarLecturaComponent } from './lectura/listar-lectura/listar-lectura.component';
import { ListarlecturapormoduloComponent } from './lectura/listarlecturapormodulo/listarlecturapormodulo.component';
import { ListarquizzpormoduloComponent } from './quizz/listarquizzpormodulo/listarquizzpormodulo.component';
import { ListaralternativaporpreguntaComponent } from './alternativa/listaralternativaporpregunta/listaralternativaporpregunta.component';
import { ListarpreguntaporquizzComponent } from './pregunta/listarpreguntaporquizz/listarpreguntaporquizz.component';
import { InformacionModuloComponent } from './modulo/informacion-modulo/informacion-modulo.component';
import { ListarmoduloporunidadComponent } from './modulo/listarmoduloporunidad/listarmoduloporunidad.component';
import { InformacionunidadComponent } from './unidad/informacionunidad/informacionunidad.component';
import { EstudiantepreguntaComponent } from './estudiantepregunta/estudiantepregunta.component';
import { CreaeditaEstudiantepreguntaComponent } from './estudiantepregunta/creaedita-estudiantepregunta/creaedita-estudiantepregunta.component';
import { CreaeditaEstudiantequizzComponent } from './estudiantequizz/creaedita-estudiantequizz/creaedita-estudiantequizz.component';
import { EstudiantequizzComponent } from './estudiantequizz/estudiantequizz.component';
import { RevisionComponent } from './revision/revision.component';
import { CreaeditaRevisionComponent } from './revision/creaedita-revision/creaedita-revision.component';
import { InformacionProyectoComponent } from './proyecto/informacion-proyecto/informacion-proyecto.component';
import { ListarunidadporcursoComponent } from './unidad/listarunidadporcurso/listarunidadporcurso.component';
import { InformacioncursoComponent } from './curso/informacioncurso/informacioncurso.component';
import { PerfilComponent } from './estudiante/perfil/perfil.component';
import { EditaestudianteComponent } from './estudiante/editaestudiante/editaestudiante.component';
import { PeerreviewRevisionComponent } from './revision/peerreview-revision/peerreview-revision.component';
import { Estudiantecurso } from '../models/estudiantecurso';
import { EstudiantecursoComponent } from './estudiantecurso/estudiantecurso.component';

const routes: Routes = [
  // For each entity, you must create a path that will be used to navigate to the related components
  {
    path: 'unidad/:idUnidad',
    component: InformacionunidadComponent,
    children: [
      {
        path: 'modulo/:idModulo',
        component: InformacionModuloComponent,
      },
      {
        path: 'proyecto/:idUnidad',
        component: InformacionProyectoComponent,
      }
    ]
  },
  {
    path: 'peerreview/:idUnidad',
    component: PeerreviewRevisionComponent
  },
  {
    path: 'perfil/:username',
    component: PerfilComponent,
  },
  {
    path: 'editarperfil/:username',
    component: EditaestudianteComponent,
  },
  {
    path: 'curso/:idCurso',
    component: InformacioncursoComponent,
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
      {
        path: 'revision',
        component: RevisionComponent,
        children: [
          { path: 'nuevo', component: CreaeditaRevisionComponent },
          { path: 'ediciones/:id', component: CreaeditaRevisionComponent },
        ],
      },
      {
        path: 'estudiantepregunta',
        component: EstudiantepreguntaComponent,
        children: [
          { path: 'nuevo', component: CreaeditaEstudiantepreguntaComponent },
          { path: 'ediciones/:id', component: CreaeditaEstudiantepreguntaComponent },
        ],
      },
      {
        path: 'estudiantequizz',
        component: EstudiantequizzComponent,
        children: [
          { path: 'nuevo', component: CreaeditaEstudiantequizzComponent },
          { path: 'ediciones/:id', component: CreaeditaEstudiantequizzComponent },
        ],
      },
      {
        path: 'estudiantecurso',
        component: EstudiantecursoComponent,
        children: [
          { path: 'nuevo', component: CreaditaEstudiantecursoComponent },
          { path: 'ediciones/:id', component: CreaditaEstudiantecursoComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
