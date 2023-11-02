// Default imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Handle HTTP mapping
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

// Forms required
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModuloComponent } from './components/modulo/modulo.component';
import { ListarModuloComponent } from './components/modulo/listar-modulo/listar-modulo.component';
import { CreaeditaModuloComponent } from './components/modulo/creaedita-modulo/creaedita-modulo.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { ListarUnidadComponent } from './components/unidad/listar-unidad/listar-unidad.component';
import { CreaeditaUnidadComponent } from './components/unidad/creaedita-unidad/creaedita-unidad.component';
import { UserComponent } from './components/user/user.component';
import { ListarUserComponent } from './components/user/listar-user/listar-user.component';
import { CreaeditaUserComponent } from './components/user/creaedita-user/creaedita-user.component';
import { CursoComponent } from './components/curso/curso.component';
import { ListarCursoComponent } from './components/curso/listar-curso/listar-curso.component';
import { CreaeditaCursoComponent } from './components/curso/creaedita-curso/creaedita-curso.component';
import { AlternativaComponent } from './components/alternativa/alternativa.component';
import { ListarAlternativaComponent } from './components/alternativa/listar-alternativa/listar-alternativa.component';
import { CreaeditaAlternativaComponent } from './components/alternativa/creaedita-alternativa/creaedita-alternativa.component';

@NgModule({
declarations: [
    AppComponent,
    ModuloComponent,
    ListarModuloComponent,
    CreaeditaModuloComponent,
    UnidadComponent,
    ListarUnidadComponent,
    CreaeditaUnidadComponent,
    UserComponent,
    ListarUserComponent,
    CreaeditaUserComponent,
    CursoComponent,
    ListarCursoComponent,
    CreaeditaCursoComponent,
    AlternativaComponent,
    ListarAlternativaComponent,
    CreaeditaAlternativaComponent],
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

    // Forms required
    FormsModule,
    ReactiveFormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }