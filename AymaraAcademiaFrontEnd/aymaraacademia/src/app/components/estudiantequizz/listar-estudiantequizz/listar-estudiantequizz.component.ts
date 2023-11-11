import { EstudiantequizzService } from './../../../services/estudiantequizz.service';
import { Estudiantequizz } from './../../../models/estudiantequizz';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-estudiantequizz',
templateUrl: './listar-estudiantequizz.component.html',
styleUrls: ['./listar-estudiantequizz.component.css'],
})
export class ListarEstudiantequizzComponent implements OnInit {
dataSource: MatTableDataSource<Estudiantequizz> = new MatTableDataSource();
displayedColumns: string[] =
['idEstudiantequizz', 'estudiante', 'quizz', 'calificacion', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private estudiantequizzService: EstudiantequizzService) {}

ngOnInit(): void {
this.estudiantequizzService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.estudiantequizzService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.estudiantequizzService.delete(id).subscribe((data) => {
this.estudiantequizzService.list().subscribe((data) => {
this.estudiantequizzService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
