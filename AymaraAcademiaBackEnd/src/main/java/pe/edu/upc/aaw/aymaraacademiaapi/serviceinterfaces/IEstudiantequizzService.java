package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import org.springframework.data.repository.query.Param;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantequizz;
import java.util.List;

public interface IEstudiantequizzService {
    void insert(Estudiantequizz Estudiantequizz);
    void delete(int id);
    Estudiantequizz listId(int id);
    List<Estudiantequizz> list();

    List<String[]> insertOrUpdateEstudianteQuizz(double calificacion, int idEstudiante, int idQuizz);
}