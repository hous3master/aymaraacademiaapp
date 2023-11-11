import { CursoService } from './../../../services/curso.service';
import { Curso } from './../../../models/curso';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-curso',
templateUrl: './listar-curso.component.html',
styleUrls: ['./listar-curso.component.css'],
})
export class ListarCursoComponent implements OnInit {
dataSource: MatTableDataSource<Curso> = new MatTableDataSource();
displayedColumns: string[] =
['idCurso', 'nombre', 'descripcion', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private cursoService: CursoService) {}

ngOnInit(): void {
this.cursoService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.cursoService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.cursoService.delete(id).subscribe((data) => {
this.cursoService.list().subscribe((data) => {
this.cursoService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
