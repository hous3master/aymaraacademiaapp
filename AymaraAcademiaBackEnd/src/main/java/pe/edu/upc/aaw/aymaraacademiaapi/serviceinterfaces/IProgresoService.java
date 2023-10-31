package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Progreso;
import java.util.List;

public interface IProgresoService {
    void insert(Progreso Progreso);
    void delete(int id);
    Progreso listId(int id);
    List<Progreso> list();
}