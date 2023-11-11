package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class EstudiantequizzDTO {
    private int idEstudiantequizz;
    private Estudiante estudiante;
    private Quizz quizz;
    private double calificacion;

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