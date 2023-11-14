import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EstudianteCurso } from 'src/app/models/estudiantecurso';
import { EstudiantecursoService } from 'src/app/services/estudiantecurso.service';

@Component({
  selector: 'app-listar-estudiantecurso',
  templateUrl: './listar-estudiantecurso.component.html',
  styleUrls: ['./listar-estudiantecurso.component.css']
})
export class ListarEstudiantecursoComponent {
  dataSource: MatTableDataSource<EstudianteCurso> = new MatTableDataSource();
  displayedColumns: string[] =
    ['idEstudiantecurso', 'idEstudiante', 'idCurso', 'accion01', 'accion02'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private estudiantecursoService: EstudiantecursoService) { }

  ngOnInit(): void {
    this.estudiantecursoService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.estudiantecursoService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
  }
  eliminar(id: number) {
    this.estudiantecursoService.delete(id).subscribe((data) => {
      this.estudiantecursoService.list().subscribe((data) => {
        this.estudiantecursoService.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
