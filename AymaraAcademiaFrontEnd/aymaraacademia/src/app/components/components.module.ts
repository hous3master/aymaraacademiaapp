import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ListarEstudianteComponent } from './estudiante/listar-estudiante/listar-estudiante.component';
import { ListarAlternativaComponent } from './alternativa/listar-alternativa/listar-alternativa.component';
import { ListarModuloComponent } from './modulo/listar-modulo/listar-modulo.component';
import { ListarPreguntaComponent } from './pregunta/listar-pregunta/listar-pregunta.component';
import { ListarPreguntaalternativaComponent } from './preguntaalternativa/listar-preguntaalternativa/listar-preguntaalternativa.component';
import { ListarProgresoComponent } from './progreso/listar-progreso/listar-progreso.component';
import { ListarVideoPorModuloComponent } from './video/listar-video-por-modulo/listar-video-por-modulo.component';
import { ListarProyectoComponent } from './proyecto/listar-proyecto/listar-proyecto.component';
import { ListarQuizzComponent } from './quizz/listar-quizz/listar-quizz.component';
import { ListarRoleComponent } from './role/listar-role/listar-role.component';
import { ListarUnidadComponent } from './unidad/listar-unidad/listar-unidad.component';
import { ListarUnidadmoduloComponent } from './unidadmodulo/listar-unidadmodulo/listar-unidadmodulo.component';
import { ListarUsersComponent } from './users/listar-users/listar-users.component';
import { ListarVideoComponent } from './video/listar-video/listar-video.component';
import { ListarCursounidadComponent } from './cursounidad/listar-cursounidad/listar-cursounidad.component';
import { ListarCursoComponent } from './curso/listar-curso/listar-curso.component';
import { SafePipeModule } from 'safe-pipe';
import { ContenidoLecturaComponent } from './lectura/contenido-lectura/contenido-lectura.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatCard } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { EstudiantepreguntaComponent } from './estudiantepregunta/estudiantepregunta.component';
import { EstudiantequizzComponent } from './estudiantequizz/estudiantequizz.component';
import { CreaeditaEstudiantepreguntaComponent } from './estudiantepregunta/creaedita-estudiantepregunta/creaedita-estudiantepregunta.component';
import { CreaeditaEstudiantequizzComponent } from './estudiantequizz/creaedita-estudiantequizz/creaedita-estudiantequizz.component';
import { ListarEstudiantepreguntaComponent } from './estudiantepregunta/listar-estudiantepregunta/listar-estudiantepregunta.component';
import { ListarEstudiantequizzComponent } from './estudiantequizz/listar-estudiantequizz/listar-estudiantequizz.component';
import { RevisionComponent } from './revision/revision.component';
import { ListarRevisionComponent } from './revision/listar-revision/listar-revision.component';
import { CreaeditaRevisionComponent } from './revision/creaedita-revision/creaedita-revision.component';
import { InformacionProyectoComponent } from './proyecto/informacion-proyecto/informacion-proyecto.component';
import { SignupUserComponent } from './signup/signup-user/signup-user.component';
import { SignupEstudianteComponent } from './signup/signup-estudiante/signup-estudiante.component';
import { ListarunidadporcursoComponent } from './unidad/listarunidadporcurso/listarunidadporcurso.component';
import { InformacioncursoComponent } from './curso/informacioncurso/informacioncurso.component';
import { PerfilComponent } from './estudiante/perfil/perfil.component';
import { EditaestudianteComponent } from './estudiante/editaestudiante/editaestudiante.component';
import { PeerreviewRevisionComponent } from './revision/peerreview-revision/peerreview-revision.component';
import { EstudiantecursoComponent } from './estudiantecurso/estudiantecurso.component';
import { CreaditaEstudiantecursoComponent } from './estudiantecurso/creadita-estudiantecurso/creadita-estudiantecurso.component';
import { ListarEstudiantecursoComponent } from './estudiantecurso/listar-estudiantecurso/listar-estudiantecurso.component';


@NgModule({
  declarations: [
    AlternativaComponent,
    ListarAlternativaComponent,
    CreaeditaAlternativaComponent,
    EstudianteComponent,
    ListarEstudianteComponent,
    CreaeditaEstudianteComponent,
    LecturaComponent,
    ListarLecturaComponent,
    CreaeditaLecturaComponent,
    ModuloComponent,
    ListarModuloComponent,
    CreaeditaModuloComponent,
    PreguntaComponent,
    ListarPreguntaComponent,
    CreaeditaPreguntaComponent,
    PreguntaalternativaComponent,
    ListarPreguntaalternativaComponent,
    CreaeditaPreguntaalternativaComponent,
    ProgresoComponent,
    ListarProgresoComponent,
    CreaeditaProgresoComponent,
    ProyectoComponent,
    ListarProyectoComponent,
    CreaeditaProyectoComponent,
    QuizzComponent,
    ListarQuizzComponent,
    CreaeditaQuizzComponent,
    RoleComponent,
    ListarRoleComponent,
    CreaeditaRoleComponent,
    UnidadComponent,
    ListarUnidadComponent,
    CreaeditaUnidadComponent,
    UnidadmoduloComponent,
    ListarUnidadmoduloComponent,
    CreaeditaUnidadmoduloComponent,
    UsersComponent,
    ListarUsersComponent,
    CreaeditaUsersComponent,
    VideoComponent,
    ListarVideoComponent,
    CreaeditaVideoComponent,
    CursounidadComponent,
    ListarCursounidadComponent,
    CreaeditaCursounidadComponent,
    CursoComponent,
    ListarCursoComponent,
    CreaeditaCursoComponent,
    EntidadesComponent,
    LandingComponent,
    ListarVideoPorModuloComponent,
    ListarlecturapormoduloComponent,
    ListarquizzpormoduloComponent,
    ListaralternativaporpreguntaComponent,
    ListarpreguntaporquizzComponent,
    InformacionModuloComponent,
    ListarmoduloporunidadComponent,
    InformacionunidadComponent,
    ContenidoLecturaComponent,
    EstudiantepreguntaComponent,
    EstudiantequizzComponent,
    CreaeditaEstudiantepreguntaComponent,
    CreaeditaEstudiantequizzComponent,
    ListarEstudiantepreguntaComponent,
    ListarEstudiantequizzComponent,
    EstudiantepreguntaComponent,
    EstudiantequizzComponent,
    RevisionComponent,
    ListarRevisionComponent,
    CreaeditaRevisionComponent,
    InformacionProyectoComponent,
    SignupUserComponent,
    SignupEstudianteComponent,
    ListarunidadporcursoComponent,
    InformacioncursoComponent,
    PerfilComponent,
    EditaestudianteComponent,
    PeerreviewRevisionComponent,
    EstudiantecursoComponent,
    CreaditaEstudiantecursoComponent,
    ListarEstudiantecursoComponent,

  ],
  imports:[
    CommonModule,
    ComponentsRoutingModule,
    MatListModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    SafePipeModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
  ]
})
export class ComponentsModule { }
