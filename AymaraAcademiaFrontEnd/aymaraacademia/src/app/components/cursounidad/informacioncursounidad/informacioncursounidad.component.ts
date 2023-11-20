import { Cursounidad } from './../../../models/cursounidad';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Unidad } from 'src/app/models/unidad';
import { CursounidadService } from 'src/app/services/cursounidad.service';

@Component({
  selector: 'app-informacioncursounidad',
  templateUrl: './informacioncursounidad.component.html',
  styleUrls: ['./informacioncursounidad.component.css']
})
export class InformacioncursounidadComponent {
  idcursounidad: number = 0
  cursos: Curso[] = []
  unidades: Unidad[] = []
  cursosunidades: Cursounidad[] = []
  nombreCurso: string = ''
  idUnidad:number=0
  idmodulo:number = 0
  idunidad:number=0
  
  constructor(
    private cursounidadService: CursounidadService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.idcursounidad = +data['idcurso']; 
      this.idunidad= data['idUnidad']; 
    
      this.cursounidadService.list().subscribe((data) => {
        this.cursosunidades = data;

        const curso = this.cursosunidades.find(cu => cu.curso.idCurso === this.idcursounidad);
        this.nombreCurso = curso ? curso.curso.nombre : '';
    
        // Filtra las unidades por el curso específico
        if (this.cursosunidades) {
          this.unidades = this.cursosunidades
            .filter(cu => cu.curso.idCurso === this.idcursounidad)
            .map(cu => cu.unidad);
        }
      });
    });  
  }
}
