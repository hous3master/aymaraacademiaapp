package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class EstudianteDTO {
    private int idEstudiante;
    private String nombre;
    private String apellido;
    private int edad;
    private int resena;
    private String email;
    private Users user;

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