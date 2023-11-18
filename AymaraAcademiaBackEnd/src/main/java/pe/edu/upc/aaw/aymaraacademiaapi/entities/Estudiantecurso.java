package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;

@Entity
@Table(name = "Estudiantecurso", uniqueConstraints = @UniqueConstraint(columnNames = {"idEstudiante", "idCurso"}))
public class Estudiantecurso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idEstudiantecurso;

    @ManyToOne
    @JoinColumn(name = "idEstudiante")
    private Estudiante estudiante;

    @ManyToOne
    @JoinColumn(name = "idCurso")
    private Curso curso;

    public Estudiantecurso() {
    }

    public Estudiantecurso(int idEstudiantecurso, Estudiante estudiante, Curso curso) {
        this.idEstudiantecurso = idEstudiantecurso;
        this.estudiante = estudiante;
        this.curso = curso;
    }

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
