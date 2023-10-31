package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Alternativa;
import java.util.List;

public interface IAlternativaService {
    void insert(Alternativa Alternativa);
    void delete(int id);
    Alternativa listId(int id);
    List<Alternativa> list();
}