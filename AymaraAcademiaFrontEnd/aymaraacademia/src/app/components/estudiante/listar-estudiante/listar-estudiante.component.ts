import { EstudianteService } from './../../../services/estudiante.service';
import { Estudiante } from './../../../models/estudiante';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-estudiante',
templateUrl: './listar-estudiante.component.html',
styleUrls: ['./listar-estudiante.component.css'],
})
export class ListarEstudianteComponent implements OnInit {
dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
displayedColumns: string[] =
['idEstudiante', 'nombre', 'apellido', 'edad', 'resena', 'email', 'user', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private estudianteService: EstudianteService) {}

ngOnInit(): void {
this.estudianteService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.estudianteService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.estudianteService.delete(id).subscribe((data) => {
this.estudianteService.list().subscribe((data) => {
this.estudianteService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
