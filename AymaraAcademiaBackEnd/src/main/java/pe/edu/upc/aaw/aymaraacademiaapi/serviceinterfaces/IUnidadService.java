package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Unidad;
import java.util.List;

public interface IUnidadService {
    void insert(Unidad Unidad);
    void delete(int id);
    Unidad listId(int id);
    List<Unidad> list();
}