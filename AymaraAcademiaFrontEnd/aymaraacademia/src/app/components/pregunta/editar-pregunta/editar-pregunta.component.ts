import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';
@Component({
  selector: 'app-editar-pregunta',
  templateUrl: './editar-pregunta.component.html',
  styleUrls: ['./editar-pregunta.component.css']
})
export class EditarPreguntaComponent {
  form: FormGroup = new FormGroup({});
  preguntas: Pregunta = new Pregunta();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private pS: PreguntaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idPregunta: [''],
      pregunta: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.preguntas.idPregunta = this.form.value.idPregunta;
      this.preguntas.pregunta = this.form.value.pregunta;

      if (this.edicion) {
        this.pS.update(this.preguntas).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.preguntas).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['pregunta']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idPregunta: new FormControl(data.idPregunta),
          pregunta: new FormControl(data.pregunta),
        });
      });
    }
  }
}
