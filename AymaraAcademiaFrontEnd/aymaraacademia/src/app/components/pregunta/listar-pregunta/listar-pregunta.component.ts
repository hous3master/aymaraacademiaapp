import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';
@Component({
  selector: 'app-listar-pregunta',
  templateUrl: './listar-pregunta.component.html',
  styleUrls: ['./listar-pregunta.component.css']
})
export class ListarPreguntaComponent {
  dataSource: MatTableDataSource<Pregunta> = new MatTableDataSource();
  displayedColumns: string[] =
  ['codigo', 'pregunta'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private pS: PreguntaService) {}

  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    }); 
  }
  eliminar(id: number) {
    this.pS.delete(id).subscribe((data) => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
