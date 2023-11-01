package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class PreguntaalternativaDTO {
    private int idPreguntaalternativa;
    private Pregunta pregunta;
    private Alternativa alternativa;

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