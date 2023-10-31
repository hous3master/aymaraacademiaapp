package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Quizz")
public class Quizz {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idQuizz;

@Column(name = "titulo", nullable = false)
private String titulo;

@ManyToOne
@JoinColumn(name = "idModulo")
private Modulo modulo;

public Quizz() { }

public Quizz(int idQuizz,String titulo, Modulo modulo) {
    this.idQuizz = idQuizz;
    this.titulo = titulo;
    this.modulo = modulo;
}

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