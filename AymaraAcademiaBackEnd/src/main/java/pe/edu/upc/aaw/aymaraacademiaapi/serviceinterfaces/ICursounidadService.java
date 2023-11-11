package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Cursounidad;
import java.util.List;

public interface ICursounidadService {
    void insert(Cursounidad Cursounidad);
    void delete(int id);
    Cursounidad listId(int id);
    List<Cursounidad> list();
}