package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Pregunta;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IPreguntaRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IPreguntaService;

import java.util.List;

@Service
public class PreguntaServiceImplement implements IPreguntaService {
    @Autowired
    private IPreguntaRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Pregunta Pregunta) {
        myRepository.save(Pregunta);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idPregunta){
        myRepository.deleteById(idPregunta);
    }

    // Retrieve an items by ID from table
    @Override
    public Pregunta listId(int idPregunta){
        return myRepository.findById(idPregunta).orElse(new Pregunta());
    }

    // Retrieve all items from table
    @Override
    public List<Pregunta> list() {
        return myRepository.findAll();
    }
}