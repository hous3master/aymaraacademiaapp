package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Preguntaalternativa")
public class Preguntaalternativa {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idPreguntaalternativa;

@ManyToOne
@JoinColumn(name = "idPregunta")
private Pregunta pregunta;

@ManyToOne
@JoinColumn(name = "idAlternativa")
private Alternativa alternativa;

public Preguntaalternativa() { }

public Preguntaalternativa(int idPreguntaalternativa,Pregunta pregunta, Alternativa alternativa) {
    this.idPreguntaalternativa = idPreguntaalternativa;
    this.pregunta = pregunta;
    this.alternativa = alternativa;
}

public int getIdPreguntaalternativa() {
    return idPreguntaalternativa;
}

public void setIdPreguntaalternativa(int idPreguntaalternativa) {
    this.idPreguntaalternativa = idPreguntaalternativa;
}

public Pregunta getPregunta() {
    return pregunta;
}

public void setPregunta(Pregunta pregunta) {
    this.pregunta = pregunta;
}

public Alternativa getAlternativa() {
    return alternativa;
}

public void setAlternativa(Alternativa alternativa) {
    this.alternativa = alternativa;
}

}