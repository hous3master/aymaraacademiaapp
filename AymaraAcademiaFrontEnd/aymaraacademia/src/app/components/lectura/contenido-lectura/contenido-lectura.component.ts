<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> main
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
<<<<<<< HEAD
  id: number = 0;
=======
  @Input() idLectura: number = 0;
>>>>>>> main
  markdown: string = "";
  renderedHTML: SafeHtml = "";

  constructor(
    private lecturaService: LecturaService,
<<<<<<< HEAD
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
=======
    private sanitizer: DomSanitizer
  ){}

  ngOnInit() {
    this.init();
  }

  init(){
    console.log(this.idLectura)
    this.lecturaService.listId(this.idLectura).subscribe((data) => {
>>>>>>> main
      this.markdown = data.descripcion;
      this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(marked(this.markdown))
    });
  }

}
