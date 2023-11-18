import { EstudiantecursoService } from './../../../services/estudiantecurso.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantecurso } from 'src/app/models/estudiantecurso';

@Component({
  selector: 'app-listar-estudiantecurso',
  templateUrl: './listar-estudiantecurso.component.html',
  styleUrls: ['./listar-estudiantecurso.component.css']
})
export class ListarEstudiantecursoComponent implements OnInit{
  dataSource: MatTableDataSource<Estudiantecurso> = new MatTableDataSource();
  displayedColumns: string[] =
    ['idEstudiantecurso', 'estudiante', 'curso','accion01','accion02'];
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
