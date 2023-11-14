package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Estudiante")
public class Estudiante {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idEstudiante;

@Column(name = "nombre", nullable = false)
private String nombre;

@Column(name = "apellido", nullable = false)
private String apellido;

@Column(name = "edad", nullable = false)
private int edad;

@Column(name = "resena")
private int resena;

@Column(name = "email", nullable = false)
private String email;

@ManyToOne
@JoinColumn(name = "id")
private Users user;

public Estudiante() { }

public Estudiante(int idEstudiante,String nombre, String apellido, int edad, int resena, String email, Users user) {
    this.idEstudiante = idEstudiante;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.resena = resena;
    this.email = email;
    this.user = user;
}

public int getIdEstudiante() {
    return idEstudiante;
}

public void setIdEstudiante(int idEstudiante) {
    this.idEstudiante = idEstudiante;
}

public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public String getApellido() {
    return apellido;
}

public void setApellido(String apellido) {
    this.apellido = apellido;
}

public int getEdad() {
    return edad;
}

public void setEdad(int edad) {
    this.edad = edad;
}

public int getResena() {
    return resena;
}

public void setResena(int resena) {
    this.resena = resena;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public Users getUser() {
    return user;
}

public void setUser(Users user) {
    this.user = user;
}

}