package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.dtos.CalificacionmoduloDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Modulo;
import java.util.List;

public interface IModuloService {
    void insert(Modulo Modulo);
    void delete(int id);
    Modulo listId(int id);
    List<Modulo> list();
    List<String[]> obtenerCalificacionPromedioPorModulo();
}