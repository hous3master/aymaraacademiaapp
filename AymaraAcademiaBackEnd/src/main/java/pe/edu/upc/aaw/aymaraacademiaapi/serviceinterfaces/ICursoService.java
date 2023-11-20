package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Curso;
import java.util.List;

public interface ICursoService {
    void insert(Curso Curso);
    void delete(int id);
    Curso listId(int id);
    List<Curso> list();
    List<String[]> obtenerEdadPromedioPorCurso();
}