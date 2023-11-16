import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Revision } from 'src/app/models/revision';
import { RevisionService } from 'src/app/services/revision.service';

@Component({
  selector: 'app-listar-revision',
  templateUrl: './listar-revision.component.html',
  styleUrls: ['./listar-revision.component.css']
})
export class ListarRevisionComponent implements OnInit{
  dataSource: MatTableDataSource<Revision> = new MatTableDataSource();
  displayedColumns: string[] =
    ['idRevision', 'proyecto', 'estudiante', 'calificacion', 'accion01', 'accion02'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private revisionService: RevisionService) {}

  ngOnInit(): void {
    this.revisionService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.revisionService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id: number) {
    this.revisionService.delete(id).subscribe((data) => {
      this.revisionService.list().subscribe((data) => {
      this.revisionService.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
