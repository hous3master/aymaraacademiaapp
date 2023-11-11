package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantequizz;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IEstudiantequizzRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudiantequizzService;

import java.util.List;

@Service
public class EstudiantequizzServiceImplement implements IEstudiantequizzService {
    @Autowired
    private IEstudiantequizzRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Estudiantequizz Estudiantequizz) {
        myRepository.save(Estudiantequizz);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idEstudiantequizz){
        myRepository.deleteById(idEstudiantequizz);
    }

    // Retrieve an items by ID from table
    @Override
    public Estudiantequizz listId(int idEstudiantequizz){
        return myRepository.findById(idEstudiantequizz).orElse(new Estudiantequizz());
    }

    // Retrieve all items from table
    @Override
    public List<Estudiantequizz> list() {
        return myRepository.findAll();
    }

    @Override
    public List<String[]> insertOrUpdateEstudianteQuizz(double calificacion, int idEstudiante, int idQuizz){
        return myRepository.insertOrUpdateEstudianteQuizz(calificacion, idEstudiante, idQuizz);
    }
}