import { Unidad } from './unidad'
import { Estudiante } from './estudiante'
export class Proyecto {
idProyecto:number=0;
titulo:string="";
descripcion:string="";
unidad:Unidad=new Unidad();
calificacion:number=0;
contador:number=0;
estudiante:Estudiante=new Estudiante();
}