import { Component, Input, OnInit } from '@angular/core';
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
  @Input() idLectura: number = 0;
  markdown: string = "";
  renderedHTML: SafeHtml = "";

  constructor(
    private lecturaService: LecturaService,
    private sanitizer: DomSanitizer
  ){}

  ngOnInit() {
    this.init();
  }

  init(){
    console.log(this.idLectura)
    this.lecturaService.listId(this.idLectura).subscribe((data) => {
      this.markdown = data.descripcion;
      this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(marked(this.markdown))
    });
  }

}
