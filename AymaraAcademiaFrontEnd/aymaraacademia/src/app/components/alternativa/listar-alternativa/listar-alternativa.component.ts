import { AlternativaService } from './../../../services/alternativa.service';
import { Alternativa } from './../../../models/alternativa';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-alternativa',
templateUrl: './listar-alternativa.component.html',
styleUrls: ['./listar-alternativa.component.css'],
})
export class ListarAlternativaComponent implements OnInit {
dataSource: MatTableDataSource<Alternativa> = new MatTableDataSource();
displayedColumns: string[] =
['idAlternativa', 'respuesta', 'correcta', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private alternativaService: AlternativaService) {}

ngOnInit(): void {
this.alternativaService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.alternativaService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.alternativaService.delete(id).subscribe((data) => {
this.alternativaService.list().subscribe((data) => {
this.alternativaService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
