package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Pregunta;
import java.util.List;

public interface IPreguntaService {
    void insert(Pregunta Pregunta);
    void delete(int id);
    Pregunta listId(int id);
    List<Pregunta> list();
}