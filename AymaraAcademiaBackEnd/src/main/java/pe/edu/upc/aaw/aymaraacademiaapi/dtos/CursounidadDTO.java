package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class CursounidadDTO {
    private int idCursounidad;
    private Curso curso;
    private Unidad unidad;

    public int getIdCursounidad() {
        return idCursounidad;
    }

    public void setIdCursounidad(int idCursounidad) {
        this.idCursounidad = idCursounidad;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Unidad getUnidad() {
        return unidad;
    }

    public void setUnidad(Unidad unidad) {
        this.unidad = unidad;
    }

}