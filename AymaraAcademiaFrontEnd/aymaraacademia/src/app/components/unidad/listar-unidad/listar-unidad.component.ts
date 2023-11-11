import { UnidadService } from './../../../services/unidad.service';
import { Unidad } from './../../../models/unidad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-unidad',
templateUrl: './listar-unidad.component.html',
styleUrls: ['./listar-unidad.component.css'],
})
export class ListarUnidadComponent implements OnInit {
dataSource: MatTableDataSource<Unidad> = new MatTableDataSource();
displayedColumns: string[] =
['idUnidad', 'nombre', 'descripcion', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private unidadService: UnidadService) {}

ngOnInit(): void {
this.unidadService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.unidadService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.unidadService.delete(id).subscribe((data) => {
this.unidadService.list().subscribe((data) => {
this.unidadService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
