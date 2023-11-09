package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Users;
import java.util.List;

public interface IUsersService {
    void insert(Users Users);
    void delete(long id);
    Users listId(long id);
    List<Users> list();
}