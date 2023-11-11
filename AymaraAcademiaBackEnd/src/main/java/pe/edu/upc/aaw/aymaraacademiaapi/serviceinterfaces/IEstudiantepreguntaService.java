package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import org.springframework.data.repository.query.Param;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantepregunta;
import java.util.List;

public interface IEstudiantepreguntaService {
    void insert(Estudiantepregunta Estudiantepregunta);
    void delete(int id);
    Estudiantepregunta listId(int id);
    List<Estudiantepregunta> list();
    List<String[]> insertOrUpdateEstudiantePregunta(boolean correcta, int idEstudiante, int idPregunta);
}