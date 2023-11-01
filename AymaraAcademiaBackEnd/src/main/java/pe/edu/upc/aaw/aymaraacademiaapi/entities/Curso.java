package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Curso")
public class Curso {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idCurso;

@Column(name = "nombre", nullable = false)
private String nombre;

@Column(name = "descripcion", nullable = false)
private String descripcion;

public Curso() { }

public Curso(int idCurso,String nombre, String descripcion) {
    this.idCurso = idCurso;
    this.nombre = nombre;
    this.descripcion = descripcion;
}

public int getIdCurso() {
    return idCurso;
}

public void setIdCurso(int idCurso) {
    this.idCurso = idCurso;
}

public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public String getDescripcion() {
    return descripcion;
}

public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
}

}