import { UnidadmoduloService } from './../../../services/unidadmodulo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Unidadmodulo } from './../../../models/unidadmodulo';
import { Component } from '@angular/core';
import { Unidad } from 'src/app/models/unidad';
import { Modulo } from 'src/app/models/modulo';

@Component({
  selector: 'app-informacionunidadmodulo',
  templateUrl: './informacionunidadmodulo.component.html',
  styleUrls: ['./informacionunidadmodulo.component.css']
})
export class InformacionunidadmoduloComponent {
  idunidadmodulo: number = 0
  unidades: Unidad[] = []
  modulos:Modulo[]=[]
  unidadesmodulos: Unidadmodulo[] = []
  nombreunidad: string = ''
  idmodulo:number=0

  constructor(
    private unidadmoduloservice: UnidadmoduloService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.idunidadmodulo= +data['idunidad'];
      this.idmodulo= data['idModulo'];
  
      this.unidadmoduloservice.list().subscribe((data) => {
        this.unidadesmodulos= data;

        const unidad = this.unidadesmodulos.find(un => un.unidad.idUnidad === this.idunidadmodulo);
        this.nombreunidad = unidad ? unidad.unidad.nombre: '';
        // Filtra los modulos por la unidad específica
        if (this.unidadesmodulos) {
          this.modulos = this.unidadesmodulos
            .filter(un => un.unidad.idUnidad === this.idunidadmodulo)
            .map(un => un.modulo);
        }
      });
    });
  }
}
