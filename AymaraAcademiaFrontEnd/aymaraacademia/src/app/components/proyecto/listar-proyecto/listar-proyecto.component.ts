import { ProyectoService } from './../../../services/proyecto.service';
import { Proyecto } from './../../../models/proyecto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-proyecto',
templateUrl: './listar-proyecto.component.html',
styleUrls: ['./listar-proyecto.component.css'],
})
export class ListarProyectoComponent implements OnInit {
dataSource: MatTableDataSource<Proyecto> = new MatTableDataSource();
displayedColumns: string[] =
['idProyecto', 'titulo', 'descripcion', 'unidad', 'calificacion', 'contador', 'estudiante', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private proyectoService: ProyectoService) {}

ngOnInit(): void {
this.proyectoService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.proyectoService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.proyectoService.delete(id).subscribe((data) => {
this.proyectoService.list().subscribe((data) => {
this.proyectoService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
