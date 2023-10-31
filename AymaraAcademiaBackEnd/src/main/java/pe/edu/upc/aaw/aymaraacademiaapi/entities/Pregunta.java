package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Pregunta")
public class Pregunta {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idPregunta;

@Column(name = "pregunta", nullable = false)
private String pregunta;

@ManyToOne
@JoinColumn(name = "idQuizz")
private Quizz quizz;

public Pregunta() { }

public Pregunta(int idPregunta,String pregunta, Quizz quizz) {
    this.idPregunta = idPregunta;
    this.pregunta = pregunta;
    this.quizz = quizz;
}

public int getIdPregunta() {
    return idPregunta;
}

public void setIdPregunta(int idPregunta) {
    this.idPregunta = idPregunta;
}

public String getPregunta() {
    return pregunta;
}

public void setPregunta(String pregunta) {
    this.pregunta = pregunta;
}

public Quizz getQuizz() {
    return quizz;
}

public void setQuizz(Quizz quizz) {
    this.quizz = quizz;
}

}