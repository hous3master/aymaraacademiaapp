package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiante;
import java.util.List;

public interface IEstudianteService {
    void insert(Estudiante Estudiante);
    void delete(int id);
    Estudiante listId(int id);
    List<Estudiante> list();

    List<String[]> findEstudianteByUserUsername(String name);
}