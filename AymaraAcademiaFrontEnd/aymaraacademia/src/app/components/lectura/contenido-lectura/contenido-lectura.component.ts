import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { marked } from 'marked';
import { LecturaService } from 'src/app/services/lectura.service';

@Component({
  selector: 'app-contenido-lectura',
  templateUrl: './contenido-lectura.component.html',
  styleUrls: ['./contenido-lectura.component.css']
})
export class ContenidoLecturaComponent implements OnInit {
  id: number = 0;
  markdown: string = "";
  renderedHTML: SafeHtml = "";

  constructor(
    private lecturaService: LecturaService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.init();
    });
  }

  init(){
    this.lecturaService.listId(this.id).subscribe((data) => {
      this.markdown = data.descripcion;
      this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(marked(this.markdown))
    });
  }

}
