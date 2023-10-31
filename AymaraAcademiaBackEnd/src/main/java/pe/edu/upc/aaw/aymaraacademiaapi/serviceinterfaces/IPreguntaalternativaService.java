package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Preguntaalternativa;
import java.util.List;

public interface IPreguntaalternativaService {
    void insert(Preguntaalternativa Preguntaalternativa);
    void delete(int id);
    Preguntaalternativa listId(int id);
    List<Preguntaalternativa> list();
}