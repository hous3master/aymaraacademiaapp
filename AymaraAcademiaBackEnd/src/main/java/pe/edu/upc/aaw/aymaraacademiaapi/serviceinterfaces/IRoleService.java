package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Role;
import java.util.List;

public interface IRoleService {
    void insert(Role Role);
    void delete(Long id);
    Role listId(Long id);
    List<Role> list();
}