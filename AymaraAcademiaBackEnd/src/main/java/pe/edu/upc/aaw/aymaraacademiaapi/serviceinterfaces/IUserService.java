package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.User;
import java.util.List;

public interface IUserService {
    void insert(User User);
    void delete(int id);
    User listId(int id);
    List<User> list();
}