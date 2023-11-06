import { VideoService } from './../../../services/video.service';
import { Video } from './../../../models/video';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listar-video',
  templateUrl: './listar-video.component.html',
  styleUrls: ['./listar-video.component.css'],
})
export class ListarVideoComponent implements OnInit {
  dataSource: MatTableDataSource<Video> = new MatTableDataSource();
  displayedColumns: string[] = [
    'idVideo',
    'url',
    'titulo',
    'descripcion',
    'duracion',
    'presentador',
    'transcripcion',
    'modulo',
    'accion01',
    'accion02',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.videoService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.videoService.delete(id).subscribe((data) => {
      this.videoService.list().subscribe((data) => {
        this.videoService.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
