import { PreguntaService } from './../../../services/pregunta.service';
import { Pregunta } from './../../../models/pregunta';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-pregunta',
templateUrl: './listar-pregunta.component.html',
styleUrls: ['./listar-pregunta.component.css'],
})
export class ListarPreguntaComponent implements OnInit {
dataSource: MatTableDataSource<Pregunta> = new MatTableDataSource();
displayedColumns: string[] =
['idPregunta', 'pregunta', 'quizz', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private preguntaService: PreguntaService) {}

ngOnInit(): void {
this.preguntaService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.preguntaService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.preguntaService.delete(id).subscribe((data) => {
this.preguntaService.list().subscribe((data) => {
this.preguntaService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
