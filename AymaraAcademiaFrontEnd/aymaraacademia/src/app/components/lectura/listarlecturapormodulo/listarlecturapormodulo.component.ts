import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LecturaService } from 'src/app/services/lectura.service';

@Component({
  selector: 'app-listarlecturapormodulo',
  templateUrl: './listarlecturapormodulo.component.html',
  styleUrls: ['./listarlecturapormodulo.component.css']
})
export class ListarlecturapormoduloComponent implements OnInit {
  @Input() idModulo: number = 0;
  lecturas: any[] = []; // replace with actual type of modulo object

  constructor(private lecturaService: LecturaService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    // Get all modulos and then filter them by idModulo and print them on console
    this.lecturaService.list().subscribe((data) => {
      this.lecturas = data;
      this.lecturas = this.lecturas.filter((lectura) => {
        return lectura.modulo.idModulo == this.idModulo;
      });
      console.log(this.lecturas);
    });
  }
}
