package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Unidadmodulo;
import java.util.List;

public interface IUnidadmoduloService {
    void insert(Unidadmodulo Unidadmodulo);
    void delete(int id);
    Unidadmodulo listId(int id);
    List<Unidadmodulo> list();
}