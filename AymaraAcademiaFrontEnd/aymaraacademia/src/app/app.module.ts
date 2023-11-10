import { MatCard } from '@angular/material/card';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
<<<<<<< HEAD
import { ListarVideoPorModuloComponent } from './components/video/listar-video-por-modulo/listar-video-por-modulo.component';
import { ListarlecturapormoduloComponent } from './components/lectura/listarlecturapormodulo/listarlecturapormodulo.component';
import { ListarquizzpormoduloComponent } from './components/quizz/listarquizzpormodulo/listarquizzpormodulo.component';
import { ListaralternativaporpreguntaComponent } from './components/alternativa/listaralternativaporpregunta/listaralternativaporpregunta.component';
import { ListarpreguntaporquizzComponent } from './components/pregunta/listarpreguntaporquizz/listarpreguntaporquizz.component';
import { InformacionModuloComponent } from './components/modulo/informacion-modulo/informacion-modulo.component';
import { ListarmoduloporunidadComponent } from './components/modulo/listarmoduloporunidad/listarmoduloporunidad.component';
import { InformacionunidadComponent } from './components/unidad/informacionunidad/informacionunidad.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContenidoLecturaComponent } from './components/lectura/contenido-lectura/contenido-lectura.component';
=======
import { LoginComponent } from './components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';


>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
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
    NavbarComponent,
    ContenidoLecturaComponent
=======
    LoginComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
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
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
