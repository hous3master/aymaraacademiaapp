// Default imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Handle HTTP mapping
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

// Forms required
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlternativaComponent } from './components/alternativa/alternativa.component';
import { ListarAlternativaComponent } from './components/alternativa/listar-alternativa/listar-alternativa.component';
import { CreaeditaAlternativaComponent } from './components/alternativa/creaedita-alternativa/creaedita-alternativa.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ListarEstudianteComponent } from './components/estudiante/listar-estudiante/listar-estudiante.component';
import { CreaeditaEstudianteComponent } from './components/estudiante/creaedita-estudiante/creaedita-estudiante.component';
import { LecturaComponent } from './components/lectura/lectura.component';
import { ListarLecturaComponent } from './components/lectura/listar-lectura/listar-lectura.component';
import { CreaeditaLecturaComponent } from './components/lectura/creaedita-lectura/creaedita-lectura.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { ListarModuloComponent } from './components/modulo/listar-modulo/listar-modulo.component';
import { CreaeditaModuloComponent } from './components/modulo/creaedita-modulo/creaedita-modulo.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ListarPreguntaComponent } from './components/pregunta/listar-pregunta/listar-pregunta.component';
import { CreaeditaPreguntaComponent } from './components/pregunta/creaedita-pregunta/creaedita-pregunta.component';
import { PreguntaalternativaComponent } from './components/preguntaalternativa/preguntaalternativa.component';
import { ListarPreguntaalternativaComponent } from './components/preguntaalternativa/listar-preguntaalternativa/listar-preguntaalternativa.component';
import { CreaeditaPreguntaalternativaComponent } from './components/preguntaalternativa/creaedita-preguntaalternativa/creaedita-preguntaalternativa.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { ListarProgresoComponent } from './components/progreso/listar-progreso/listar-progreso.component';
import { CreaeditaProgresoComponent } from './components/progreso/creaedita-progreso/creaedita-progreso.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ListarProyectoComponent } from './components/proyecto/listar-proyecto/listar-proyecto.component';
import { CreaeditaProyectoComponent } from './components/proyecto/creaedita-proyecto/creaedita-proyecto.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { ListarQuizzComponent } from './components/quizz/listar-quizz/listar-quizz.component';
import { CreaeditaQuizzComponent } from './components/quizz/creaedita-quizz/creaedita-quizz.component';
import { RoleComponent } from './components/role/role.component';
import { ListarRoleComponent } from './components/role/listar-role/listar-role.component';
import { CreaeditaRoleComponent } from './components/role/creaedita-role/creaedita-role.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { ListarUnidadComponent } from './components/unidad/listar-unidad/listar-unidad.component';
import { CreaeditaUnidadComponent } from './components/unidad/creaedita-unidad/creaedita-unidad.component';
import { UnidadmoduloComponent } from './components/unidadmodulo/unidadmodulo.component';
import { ListarUnidadmoduloComponent } from './components/unidadmodulo/listar-unidadmodulo/listar-unidadmodulo.component';
import { CreaeditaUnidadmoduloComponent } from './components/unidadmodulo/creaedita-unidadmodulo/creaedita-unidadmodulo.component';
import { UsersComponent } from './components/users/users.component';
import { ListarUsersComponent } from './components/users/listar-users/listar-users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { VideoComponent } from './components/video/video.component';
import { ListarVideoComponent } from './components/video/listar-video/listar-video.component';
import { CreaeditaVideoComponent } from './components/video/creaedita-video/creaedita-video.component';
import { CursounidadComponent } from './components/cursounidad/cursounidad.component';
import { ListarCursounidadComponent } from './components/cursounidad/listar-cursounidad/listar-cursounidad.component';
import { CreaeditaCursounidadComponent } from './components/cursounidad/creaedita-cursounidad/creaedita-cursounidad.component';
import { CursoComponent } from './components/curso/curso.component';
import { ListarCursoComponent } from './components/curso/listar-curso/listar-curso.component';
import { CreaeditaCursoComponent } from './components/curso/creaedita-curso/creaedita-curso.component';
import { EntidadesComponent } from './components/entidades/entidades.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    // Default
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Handle HTTP mapping
    HttpClientModule,

    // Material navigation
    MatMenuModule,
    MatToolbarModule,

    // Material table and pagination
    MatTableModule,
    MatPaginatorModule,

    // Material forms
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,

    // Forms required
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
