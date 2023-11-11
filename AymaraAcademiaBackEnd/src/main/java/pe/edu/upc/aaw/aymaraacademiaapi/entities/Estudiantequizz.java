package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Estudiantequizz", uniqueConstraints = @UniqueConstraint (columnNames = {"idEstudiante", "idQuizz"}))
public class Estudiantequizz {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idEstudiantequizz;

@ManyToOne
@JoinColumn(name = "idEstudiante")
private Estudiante estudiante;

@ManyToOne
@JoinColumn(name = "idQuizz")
private Quizz quizz;

@Column(name = "calificacion", nullable = false)
private double calificacion;

public Estudiantequizz() { }

public Estudiantequizz(int idEstudiantequizz,Estudiante estudiante, Quizz quizz, double calificacion) {
    this.idEstudiantequizz = idEstudiantequizz;
    this.estudiante = estudiante;
    this.quizz = quizz;
    this.calificacion = calificacion;
}

public int getIdEstudiantequizz() {
    return idEstudiantequizz;
}

public void setIdEstudiantequizz(int idEstudiantequizz) {
    this.idEstudiantequizz = idEstudiantequizz;
}

public Estudiante getEstudiante() {
    return estudiante;
}

public void setEstudiante(Estudiante estudiante) {
    this.estudiante = estudiante;
}

public Quizz getQuizz() {
    return quizz;
}

public void setQuizz(Quizz quizz) {
    this.quizz = quizz;
}

public double getCalificacion() {
    return calificacion;
}

public void setCalificacion(double calificacion) {
    this.calificacion = calificacion;
}

}