import { Estudiante } from './estudiante'
import { Pregunta } from './pregunta'
export class Estudiantepregunta {
idEstudiantepregunta:number=0;
estudiante:Estudiante=new Estudiante();
pregunta:Pregunta=new Pregunta();
correcta:boolean=false;
}