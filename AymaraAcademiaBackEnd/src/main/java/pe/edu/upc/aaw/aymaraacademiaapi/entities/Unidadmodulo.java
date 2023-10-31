package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Unidadmodulo")
public class Unidadmodulo {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idUnidadmodulo;

@ManyToOne
@JoinColumn(name = "idUnidad")
private Unidad unidad;

@ManyToOne
@JoinColumn(name = "idModulo")
private Modulo modulo;

public Unidadmodulo() { }

public Unidadmodulo(int idUnidadmodulo,Unidad unidad, Modulo modulo) {
    this.idUnidadmodulo = idUnidadmodulo;
    this.unidad = unidad;
    this.modulo = modulo;
}

public int getIdUnidadmodulo() {
    return idUnidadmodulo;
}

public void setIdUnidadmodulo(int idUnidadmodulo) {
    this.idUnidadmodulo = idUnidadmodulo;
}

public Unidad getUnidad() {
    return unidad;
}

public void setUnidad(Unidad unidad) {
    this.unidad = unidad;
}

public Modulo getModulo() {
    return modulo;
}

public void setModulo(Modulo modulo) {
    this.modulo = modulo;
}

}