import { ProgresoService } from './../../../services/progreso.service';
import { Progreso } from './../../../models/progreso';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-progreso',
templateUrl: './listar-progreso.component.html',
styleUrls: ['./listar-progreso.component.css'],
})
export class ListarProgresoComponent implements OnInit {
dataSource: MatTableDataSource<Progreso> = new MatTableDataSource();
displayedColumns: string[] =
['idProgreso', 'progreso', 'estudiante', 'modulo', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private progresoService: ProgresoService) {}

ngOnInit(): void {
this.progresoService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.progresoService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.progresoService.delete(id).subscribe((data) => {
this.progresoService.list().subscribe((data) => {
this.progresoService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
