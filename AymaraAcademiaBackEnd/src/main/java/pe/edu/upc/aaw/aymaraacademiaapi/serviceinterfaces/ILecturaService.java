package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Lectura;
import java.util.List;

public interface ILecturaService {
    void insert(Lectura Lectura);
    void delete(int id);
    Lectura listId(int id);
    List<Lectura> list();
}