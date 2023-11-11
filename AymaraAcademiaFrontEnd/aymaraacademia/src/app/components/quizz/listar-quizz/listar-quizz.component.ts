import { QuizzService } from './../../../services/quizz.service';
import { Quizz } from './../../../models/quizz';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-quizz',
templateUrl: './listar-quizz.component.html',
styleUrls: ['./listar-quizz.component.css'],
})
export class ListarQuizzComponent implements OnInit {
dataSource: MatTableDataSource<Quizz> = new MatTableDataSource();
displayedColumns: string[] =
['idQuizz', 'titulo', 'modulo', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private quizzService: QuizzService) {}

ngOnInit(): void {
this.quizzService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.quizzService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.quizzService.delete(id).subscribe((data) => {
this.quizzService.list().subscribe((data) => {
this.quizzService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
