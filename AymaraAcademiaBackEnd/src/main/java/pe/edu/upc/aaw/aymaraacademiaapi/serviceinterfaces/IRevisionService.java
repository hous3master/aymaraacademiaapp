package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import org.springframework.data.repository.query.Param;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Revision;

import java.util.List;

public interface IRevisionService {
    void insert(Revision Revision);
    void delete(int id);
    Revision listId(int id);
    List<Revision> list();

    List<String[]> insertOrUpdateRevision(int idEstudiante, int idProyecto, double calificacion, boolean revisado);
}
