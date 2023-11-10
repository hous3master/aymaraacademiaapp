import { PreguntaalternativaService } from 'src/app/services/preguntaalternativa.service';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import { Preguntaalternativa } from 'src/app/models/preguntaalternativa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-listaralternativaporpregunta',
  templateUrl: './listaralternativaporpregunta.component.html',
  styleUrls: ['./listaralternativaporpregunta.component.css'],
})
export class ListaralternativaporpreguntaComponent implements OnInit {
  @Input() idPregunta: number = 0;
  preguntaalternativa: Preguntaalternativa[] = []; // replace with actual type of video object
  form: FormGroup = new FormGroup({});
  mensaje: string = '';

  constructor(
    private preguntaalternativaService: PreguntaalternativaService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.init();
    this.form = this.formBuilder.group({
      correctaControl: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      console.log(this.loginService.showRole());
      console.log(this.loginService.getUsername());
      console.log(this.form.value);
      this.mensaje = 'Se ha guardado correctamente.';
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  init() {
    // Get all preguntas and then filter them by idPregunta and print them on console
    this.preguntaalternativaService.list().subscribe((data) => {
      this.preguntaalternativa = data;
      this.preguntaalternativa = this.preguntaalternativa.filter(
        (preguntaalternativa) => {
          return preguntaalternativa.pregunta.idPregunta == this.idPregunta;
        }
      );
      console.log(this.preguntaalternativa);
    });
  }
}
