package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Alternativa")
public class Alternativa {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idAlternativa;

@Column(name = "respuesta", nullable = false)
private String respuesta;

@Column(name = "correcta", nullable = false)
private boolean correcta;

public Alternativa() { }

public Alternativa(int idAlternativa,String respuesta, boolean correcta) {
    this.idAlternativa = idAlternativa;
    this.respuesta = respuesta;
    this.correcta = correcta;
}

public int getIdAlternativa() {
    return idAlternativa;
}

public void setIdAlternativa(int idAlternativa) {
    this.idAlternativa = idAlternativa;
}

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

}