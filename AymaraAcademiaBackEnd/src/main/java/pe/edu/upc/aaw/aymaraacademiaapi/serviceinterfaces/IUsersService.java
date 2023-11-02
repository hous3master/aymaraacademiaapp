package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Users;
import java.util.List;

public interface IUsersService {
    void insert(Users Users);
    void delete(int id);
    Users listId(int id);
    List<Users> list();
}