import { EstudiantepreguntaService } from './../../../services/estudiantepregunta.service';
import { Estudiantepregunta } from './../../../models/estudiantepregunta';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-estudiantepregunta',
templateUrl: './listar-estudiantepregunta.component.html',
styleUrls: ['./listar-estudiantepregunta.component.css'],
})
export class ListarEstudiantepreguntaComponent implements OnInit {
dataSource: MatTableDataSource<Estudiantepregunta> = new MatTableDataSource();
displayedColumns: string[] =
['idEstudiantepregunta', 'estudiante', 'pregunta', 'correcta', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private estudiantepreguntaService: EstudiantepreguntaService) {}

ngOnInit(): void {
this.estudiantepreguntaService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.estudiantepreguntaService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.estudiantepreguntaService.delete(id).subscribe((data) => {
this.estudiantepreguntaService.list().subscribe((data) => {
this.estudiantepreguntaService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
