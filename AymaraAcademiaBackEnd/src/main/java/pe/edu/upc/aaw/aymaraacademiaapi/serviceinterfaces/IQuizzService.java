package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Quizz;
import java.util.List;

public interface IQuizzService {
    void insert(Quizz Quizz);
    void delete(int id);
    Quizz listId(int id);
    List<Quizz> list();
}