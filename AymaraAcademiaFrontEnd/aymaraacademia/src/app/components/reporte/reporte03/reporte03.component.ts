import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-reporte03',
  templateUrl: './reporte03.component.html',
  styleUrls: ['./reporte03.component.css']
})
export class Reporte03Component implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private cS: CursoService) {}

  ngOnInit(): void {
    this.cS.getAgeAv().subscribe(
      (data) => {
        this.barChartLabels = data.map((item) => item.curso);
        this.barChartData = [
          {
            data: data.map((item) => item.edadPromedio as number),
            label: 'Edad promedio',
            backgroundColor: 'rgba(0,0,255,0.3)',
          },
        ];
      },
      (error) => {
        console.error('Error al obtener datos:', error);
        // Puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario.
      }
    );
  }
}
