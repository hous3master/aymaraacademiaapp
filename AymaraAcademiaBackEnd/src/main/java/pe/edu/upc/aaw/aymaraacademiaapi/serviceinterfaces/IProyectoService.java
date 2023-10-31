package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Proyecto;
import java.util.List;

public interface IProyectoService {
    void insert(Proyecto Proyecto);
    void delete(int id);
    Proyecto listId(int id);
    List<Proyecto> list();
}