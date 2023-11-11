package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Cursounidad")
public class Cursounidad {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idCursounidad;

@ManyToOne
@JoinColumn(name = "idCurso")
private Curso curso;

@ManyToOne
@JoinColumn(name = "idUnidad")
private Unidad unidad;

public Cursounidad() { }

public Cursounidad(int idCursounidad,Curso curso, Unidad unidad) {
    this.idCursounidad = idCursounidad;
    this.curso = curso;
    this.unidad = unidad;
}

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