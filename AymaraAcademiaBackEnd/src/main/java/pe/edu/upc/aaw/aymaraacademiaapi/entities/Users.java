package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Users")
public class Users {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idUsers;

@Column(name = "username", nullable = false)
private String username;

@Column(name = "password", nullable = false)
private String password;

public Users() { }

public Users(int idUsers,String username, String password) {
    this.idUsers = idUsers;
    this.username = username;
    this.password = password;
}

public int getIdUsers() {
    return idUsers;
}

public void setIdUsers(int idUsers) {
    this.idUsers = idUsers;
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