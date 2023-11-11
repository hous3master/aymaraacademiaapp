package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class EstudiantepreguntaDTO {
    private int idEstudiantepregunta;
    private Estudiante estudiante;
    private Pregunta pregunta;
    private boolean correcta;

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