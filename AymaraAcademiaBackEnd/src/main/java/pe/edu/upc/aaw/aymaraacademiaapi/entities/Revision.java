package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;

@Entity
@Table(name = "Revision", uniqueConstraints = @UniqueConstraint(columnNames = {"idProyecto", "idEstudiante"}))
public class Revision {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRevision;

    @ManyToOne
    @JoinColumn(name = "idProyecto")
    private Proyecto proyecto;

    @ManyToOne
    @JoinColumn(name = "idEstudiante")
    private Estudiante estudiante;

    @Column(name = "calificacion", nullable = false)
    private double calificacion;

    @Column(name = "revisado", nullable = true)
    private boolean revisado;

    public Revision(){}

    public Revision(int idRevision, Proyecto proyecto, Estudiante estudiante, double calificacion, boolean revisado) {
        this.idRevision = idRevision;
        this.proyecto = proyecto;
        this.estudiante = estudiante;
        this.calificacion = calificacion;
        this.revisado = revisado;
    }

    public int getIdRevision() {
        return idRevision;
    }

    public void setIdRevision(int idRevision) {
        this.idRevision = idRevision;
    }

    public Proyecto getProyecto() {
        return proyecto;
    }

    public void setProyecto(Proyecto proyecto) {
        this.proyecto = proyecto;
    }

    public Estudiante getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
    }

    public double getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(double calificacion) {
        this.calificacion = calificacion;
    }

    public boolean isRevisado() {
        return revisado;
    }

    public void setRevisado(boolean revisado) {
        this.revisado = revisado;
    }
}
