package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Modulo")
public class Modulo {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idModulo;

@Column(name = "nombre", nullable = false)
private String nombre;

@Column(name = "descripcion", nullable = false, length = 4000)
private String descripcion;

public Modulo() { }

public Modulo(int idModulo,String nombre, String descripcion) {
    this.idModulo = idModulo;
    this.nombre = nombre;
    this.descripcion = descripcion;
}

public int getIdModulo() {
    return idModulo;
}

public void setIdModulo(int idModulo) {
    this.idModulo = idModulo;
}

public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public String getDescripcion() {
    return descripcion;
}

public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
}

}