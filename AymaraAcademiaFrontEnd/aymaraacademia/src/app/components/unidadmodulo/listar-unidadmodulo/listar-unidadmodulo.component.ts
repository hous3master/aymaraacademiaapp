import { UnidadmoduloService } from './../../../services/unidadmodulo.service';
import { Unidadmodulo } from './../../../models/unidadmodulo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-unidadmodulo',
templateUrl: './listar-unidadmodulo.component.html',
styleUrls: ['./listar-unidadmodulo.component.css'],
})
export class ListarUnidadmoduloComponent implements OnInit {
dataSource: MatTableDataSource<Unidadmodulo> = new MatTableDataSource();
displayedColumns: string[] =
['idUnidadmodulo', 'unidad', 'modulo', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private unidadmoduloService: UnidadmoduloService) {}

ngOnInit(): void {
this.unidadmoduloService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.unidadmoduloService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.unidadmoduloService.delete(id).subscribe((data) => {
this.unidadmoduloService.list().subscribe((data) => {
this.unidadmoduloService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
