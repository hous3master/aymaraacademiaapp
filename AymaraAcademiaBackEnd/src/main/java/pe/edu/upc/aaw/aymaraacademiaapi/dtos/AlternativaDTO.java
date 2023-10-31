package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class AlternativaDTO {
    private String respuesta;
    private boolean correcta;
    private Preguntaalternativa preguntaalternativa;

    public String getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
    }

    public boolean getCorrecta() {
        return correcta;
    }

    public void setCorrecta(boolean correcta) {
        this.correcta = correcta;
    }

    public Preguntaalternativa getPreguntaalternativa() {
        return preguntaalternativa;
    }

    public void setPreguntaalternativa(Preguntaalternativa preguntaalternativa) {
        this.preguntaalternativa = preguntaalternativa;
    }

}