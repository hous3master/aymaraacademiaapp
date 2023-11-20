import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private mS: ModuloService) {}

  ngOnInit(): void {
    this.mS.getCount().subscribe(
      (data) => {
        this.barChartLabels = data.map((item) => item.nombre);
        this.barChartData = [
          {
            data: data.map((item) => item.calificacionPromedio as number),
            label: 'Calificacion promedio',
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
