import { LecturaService } from './../../../services/lectura.service';
import { Lectura } from './../../../models/lectura';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-lectura',
templateUrl: './listar-lectura.component.html',
styleUrls: ['./listar-lectura.component.css'],
})
export class ListarLecturaComponent implements OnInit {
dataSource: MatTableDataSource<Lectura> = new MatTableDataSource();
displayedColumns: string[] =
['idLectura', 'descripcion', 'titulo', 'autor', 'modulo', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private lecturaService: LecturaService) {}

ngOnInit(): void {
this.lecturaService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.lecturaService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.lecturaService.delete(id).subscribe((data) => {
this.lecturaService.list().subscribe((data) => {
this.lecturaService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
