import { PreguntaalternativaService } from './../../../services/preguntaalternativa.service';
import { Preguntaalternativa } from './../../../models/preguntaalternativa';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-preguntaalternativa',
templateUrl: './listar-preguntaalternativa.component.html',
styleUrls: ['./listar-preguntaalternativa.component.css'],
})
export class ListarPreguntaalternativaComponent implements OnInit {
dataSource: MatTableDataSource<Preguntaalternativa> = new MatTableDataSource();
displayedColumns: string[] =
['idPreguntaalternativa', 'pregunta', 'alternativa', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private preguntaalternativaService: PreguntaalternativaService) {}

ngOnInit(): void {
this.preguntaalternativaService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.preguntaalternativaService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.preguntaalternativaService.delete(id).subscribe((data) => {
this.preguntaalternativaService.list().subscribe((data) => {
this.preguntaalternativaService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
