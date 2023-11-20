import { Unidad } from './unidad'
import { Estudiante } from './estudiante'
export class Proyecto {
idProyecto:number=0;
titulo:string="";
descripcion:string="";
unidad:Unidad=new Unidad();
contenido:string=""
calificacion:number=0;
contador:number=0;
estudiante:Estudiante=new Estudiante();
enviado:boolean = false
}
