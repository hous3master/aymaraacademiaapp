package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Quizz;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IQuizzRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IQuizzService;

import java.util.List;

@Service
public class QuizzServiceImplement implements IQuizzService {
    @Autowired
    private IQuizzRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Quizz Quizz) {
        myRepository.save(Quizz);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idQuizz){
        myRepository.deleteById(idQuizz);
    }

    // Retrieve an items by ID from table
    @Override
    public Quizz listId(int idQuizz){
        return myRepository.findById(idQuizz).orElse(new Quizz());
    }

    // Retrieve all items from table
    @Override
    public List<Quizz> list() {
        return myRepository.findAll();
    }
}