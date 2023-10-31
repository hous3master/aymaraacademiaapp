package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Unidad")
public class Unidad {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idUnidad;

@Column(name = "nombre", nullable = false)
private String nombre;

@Column(name = "descripcion", nullable = false)
private String descripcion;

public Unidad() { }

public Unidad(int idUnidad,String nombre, String descripcion) {
    this.idUnidad = idUnidad;
    this.nombre = nombre;
    this.descripcion = descripcion;
}

public int getIdUnidad() {
    return idUnidad;
}

public void setIdUnidad(int idUnidad) {
    this.idUnidad = idUnidad;
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