package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Estudiantepregunta", uniqueConstraints = @UniqueConstraint (columnNames = {"idEstudiante", "idPregunta"}))
public class Estudiantepregunta {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idEstudiantepregunta;

@ManyToOne
@JoinColumn(name = "idEstudiante")
private Estudiante estudiante;

@ManyToOne
@JoinColumn(name = "idPregunta")
private Pregunta pregunta;

@Column(name = "correcta", nullable = false)
private boolean correcta;

public Estudiantepregunta() { }

public Estudiantepregunta(int idEstudiantepregunta,Estudiante estudiante, Pregunta pregunta, boolean correcta) {
    this.idEstudiantepregunta = idEstudiantepregunta;
    this.estudiante = estudiante;
    this.pregunta = pregunta;
    this.correcta = correcta;
}

public int getIdEstudiantepregunta() {
    return idEstudiantepregunta;
}

public void setIdEstudiantepregunta(int idEstudiantepregunta) {
    this.idEstudiantepregunta = idEstudiantepregunta;
}

public Estudiante getEstudiante() {
    return estudiante;
}

public void setEstudiante(Estudiante estudiante) {
    this.estudiante = estudiante;
}

public Pregunta getPregunta() {
    return pregunta;
}

public void setPregunta(Pregunta pregunta) {
    this.pregunta = pregunta;
}

public boolean getCorrecta() {
    return correcta;
}

public void setCorrecta(boolean correcta) {
    this.correcta = correcta;
}

}