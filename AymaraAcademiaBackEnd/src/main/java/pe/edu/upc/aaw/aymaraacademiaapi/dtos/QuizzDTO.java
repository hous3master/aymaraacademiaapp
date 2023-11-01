package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class QuizzDTO {
    private int idQuizz;
    private String titulo;
    private Modulo modulo;

    public int getIdQuizz() {
        return idQuizz;
    }

    public void setIdQuizz(int idQuizz) {
        this.idQuizz = idQuizz;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }

}