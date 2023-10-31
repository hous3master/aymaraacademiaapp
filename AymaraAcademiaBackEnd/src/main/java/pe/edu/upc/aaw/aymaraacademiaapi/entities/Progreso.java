package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Progreso")
public class Progreso {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idProgreso;

@Column(name = "progreso", nullable = false)
private double progreso;

@ManyToOne
@JoinColumn(name = "idEstudiante")
private Estudiante estudiante;

@ManyToOne
@JoinColumn(name = "idModulo")
private Modulo modulo;

public Progreso() { }

public Progreso(int idProgreso,double progreso, Estudiante estudiante, Modulo modulo) {
    this.idProgreso = idProgreso;
    this.progreso = progreso;
    this.estudiante = estudiante;
    this.modulo = modulo;
}

public int getIdProgreso() {
    return idProgreso;
}

public void setIdProgreso(int idProgreso) {
    this.idProgreso = idProgreso;
}

public double getProgreso() {
    return progreso;
}

public void setProgreso(double progreso) {
    this.progreso = progreso;
}

public Estudiante getEstudiante() {
    return estudiante;
}

public void setEstudiante(Estudiante estudiante) {
    this.estudiante = estudiante;
}

public Modulo getModulo() {
    return modulo;
}

public void setModulo(Modulo modulo) {
    this.modulo = modulo;
}

}