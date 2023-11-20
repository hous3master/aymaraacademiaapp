import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ProgresoService } from 'src/app/services/progreso.service';

@Component({
  selector: 'app-reporte02',
  templateUrl: './reporte02.component.html',
  styleUrls: ['./reporte02.component.css']
})
export class Reporte02Component {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private progresoService: ProgresoService) {}

  ngOnInit(): void {
    this.progresoService.getAvanceEstudiantes().subscribe(
      (data) => {
        const modulosUnicos = Array.from(new Set(data.map(item => item.nombreModulo)));
        const estudiantes = Array.from(new Set(data.map(item => item.nombreEstudiante)));

        const datasets: ChartDataset[] = [];

        modulosUnicos.forEach(modulo => {
          const porcentajesAvance = estudiantes.map(estudiante => {
            const porcentaje = data.find(item => item.nombreEstudiante === estudiante && item.nombreModulo === modulo)?.porcentajeAvance;
            return porcentaje !== undefined ? porcentaje : 0;
          });

          datasets.push({
            data: porcentajesAvance,
            label: `${modulo} - Avance`,
            backgroundColor: this.getRandomColor(),
          });
        });

        this.barChartLabels = estudiantes;
        this.barChartData = datasets;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
