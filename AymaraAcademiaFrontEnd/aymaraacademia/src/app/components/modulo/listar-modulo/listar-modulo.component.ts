import { ModuloService } from './../../../services/modulo.service';
import { Modulo } from './../../../models/modulo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-modulo',
templateUrl: './listar-modulo.component.html',
styleUrls: ['./listar-modulo.component.css'],
})
export class ListarModuloComponent implements OnInit {
dataSource: MatTableDataSource<Modulo> = new MatTableDataSource();
displayedColumns: string[] =
['idModulo', 'nombre', 'descripcion', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private moduloService: ModuloService) {}

ngOnInit(): void {
this.moduloService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.moduloService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.moduloService.delete(id).subscribe((data) => {
this.moduloService.list().subscribe((data) => {
this.moduloService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
