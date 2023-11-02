import { CursounidadService } from './../../../services/cursounidad.service';
import { Cursounidad } from './../../../models/cursounidad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-cursounidad',
templateUrl: './listar-cursounidad.component.html',
styleUrls: ['./listar-cursounidad.component.css'],
})
export class ListarCursounidadComponent implements OnInit {
dataSource: MatTableDataSource<Cursounidad> = new MatTableDataSource();
displayedColumns: string[] =
['idCursounidad', 'curso', 'unidad', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private cursounidadService: CursounidadService) {}

ngOnInit(): void {
this.cursounidadService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.cursounidadService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.cursounidadService.delete(id).subscribe((data) => {
this.cursounidadService.list().subscribe((data) => {
this.cursounidadService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
