package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Proyecto")
public class Proyecto {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idProyecto;

@Column(name = "titulo", nullable = false)
private String titulo;

@Column(name = "descripcion", nullable = false)
private String descripcion;

@ManyToOne
@JoinColumn(name = "idUnidad")
private Unidad unidad;

@Column(name = "contenido", nullable = true, columnDefinition = "TEXT")
private String contenido;

@Column(name = "calificacion", nullable = false)
private double calificacion;

@Column(name = "contador", nullable = false)
private int contador;

@ManyToOne
@JoinColumn(name = "idEstudiante")
private Estudiante estudiante;

@Column(name = "enviado", nullable = false)
private boolean enviado;

public Proyecto() { }

public Proyecto(int idProyecto,String titulo, String descripcion, Unidad unidad, String contenido, double calificacion, int contador, Estudiante estudiante, boolean enviado) {
    this.idProyecto = idProyecto;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.unidad = unidad;
    this.contenido = contenido;
    this.calificacion = calificacion;
    this.contador = contador;
    this.estudiante = estudiante;
    this.enviado = enviado;
}

public int getIdProyecto() {
    return idProyecto;
}

public void setIdProyecto(int idProyecto) {
    this.idProyecto = idProyecto;
}

public String getTitulo() {
    return titulo;
}

public void setTitulo(String titulo) {
    this.titulo = titulo;
}

public String getDescripcion() {
    return descripcion;
}

public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
}

public Unidad getUnidad() {
    return unidad;
}

public void setUnidad(Unidad unidad) {
    this.unidad = unidad;
}

public String getContenido() {
    return contenido;
}
public void setContenido(String contenido) {
    this.contenido = contenido;
}

public double getCalificacion() {
    return calificacion;
}

public void setCalificacion(double calificacion) {
    this.calificacion = calificacion;
}

public int getContador() {
    return contador;
}

public void setContador(int contador) {
    this.contador = contador;
}

public Estudiante getEstudiante() {
    return estudiante;
}

public void setEstudiante(Estudiante estudiante) {
    this.estudiante = estudiante;
}

public boolean getEnviado() {
    return enviado;
}
public void setEnviado(boolean enviado) {
    this.enviado = enviado;
}

}