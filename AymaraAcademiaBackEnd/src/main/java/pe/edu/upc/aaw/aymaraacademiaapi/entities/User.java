package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "User")
public class User {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idUser;

@Column(name = "username", nullable = false)
private String username;

@Column(name = "password", nullable = false)
private String password;

public User() { }

public User(int idUser,String username, String password) {
    this.idUser = idUser;
    this.username = username;
    this.password = password;
}

public int getIdUser() {
    return idUser;
}

public void setIdUser(int idUser) {
    this.idUser = idUser;
}

public String getUsername() {
    return username;
}

public void setUsername(String username) {
    this.username = username;
}

public String getPassword() {
    return password;
}

public void setPassword(String password) {
    this.password = password;
}

}