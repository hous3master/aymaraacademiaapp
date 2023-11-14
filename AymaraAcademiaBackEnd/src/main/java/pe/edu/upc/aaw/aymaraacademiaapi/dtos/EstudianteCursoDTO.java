package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Curso;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiante;

public class EstudianteCursoDTO {
    private int idEstudiantecurso;
    private Estudiante estudiante;
    private Curso curso;

    public int getIdEstudiantecurso() {
        return idEstudiantecurso;
    }

    public void setIdEstudiantecurso(int idEstudiantecurso) {
        this.idEstudiantecurso = idEstudiantecurso;
    }

    public Estudiante getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }
}
