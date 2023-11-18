package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class ProyectoDTO {
    private int idProyecto;
    private String titulo;
    private String descripcion;
    private Unidad unidad;
    private String contenido;
    private double calificacion;
    private int contador;
    private Estudiante estudiante;
    private boolean enviado;

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