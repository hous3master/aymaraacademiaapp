package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Role")
public class Role {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idRole;

@Column(name = "rol", nullable = false)
private String rol;

@ManyToOne
@JoinColumn(name = "idUser")
private User user;

public Role() { }

public Role(int idRole,String rol, User user) {
    this.idRole = idRole;
    this.rol = rol;
    this.user = user;
}

public int getIdRole() {
    return idRole;
}

public void setIdRole(int idRole) {
    this.idRole = idRole;
}

public String getRol() {
    return rol;
}

public void setRol(String rol) {
    this.rol = rol;
}

public User getUser() {
    return user;
}

public void setUser(User user) {
    this.user = user;
}

}