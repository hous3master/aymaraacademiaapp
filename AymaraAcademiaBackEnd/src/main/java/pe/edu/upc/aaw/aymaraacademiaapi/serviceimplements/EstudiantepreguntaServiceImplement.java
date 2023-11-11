package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantepregunta;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IEstudiantepreguntaRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudiantepreguntaService;

import java.util.List;

@Service
public class EstudiantepreguntaServiceImplement implements IEstudiantepreguntaService {
    @Autowired
    private IEstudiantepreguntaRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Estudiantepregunta Estudiantepregunta) {
        myRepository.save(Estudiantepregunta);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idEstudiantepregunta){
        myRepository.deleteById(idEstudiantepregunta);
    }

    // Retrieve an items by ID from table
    @Override
    public Estudiantepregunta listId(int idEstudiantepregunta){
        return myRepository.findById(idEstudiantepregunta).orElse(new Estudiantepregunta());
    }

    // Retrieve all items from table
    @Override
    public List<Estudiantepregunta> list() {
        return myRepository.findAll();
    }

    @Override
    public List<String[]> insertOrUpdateEstudiantePregunta(boolean correcta, int idEstudiante, int idPregunta) {
        return myRepository.insertOrUpdateEstudiantePregunta(correcta, idEstudiante, idPregunta);
    }
}