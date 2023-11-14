package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.EstudianteCurso;

import java.util.List;

public interface IEstudianteCursoService {
    void insert(EstudianteCurso estudianteCurso);
    void delete(int id);
    EstudianteCurso listId(int id);
    List<EstudianteCurso> list();
}
