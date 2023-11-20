package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantecurso;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantepregunta;

import java.util.List;

public interface IEstudiantecursoService {
    void insert(Estudiantecurso estudiantecurso);
    void delete(int id);
    Estudiantecurso listId(int id);
    List<Estudiantecurso> list();
}
