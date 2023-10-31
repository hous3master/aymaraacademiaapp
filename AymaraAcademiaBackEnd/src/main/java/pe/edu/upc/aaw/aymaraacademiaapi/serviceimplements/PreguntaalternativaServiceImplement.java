package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Preguntaalternativa;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IPreguntaalternativaRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IPreguntaalternativaService;

import java.util.List;

@Service
public class PreguntaalternativaServiceImplement implements IPreguntaalternativaService {
    @Autowired
    private IPreguntaalternativaRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Preguntaalternativa Preguntaalternativa) {
        myRepository.save(Preguntaalternativa);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idPreguntaalternativa){
        myRepository.deleteById(idPreguntaalternativa);
    }

    // Retrieve an items by ID from table
    @Override
    public Preguntaalternativa listId(int idPreguntaalternativa){
        return myRepository.findById(idPreguntaalternativa).orElse(new Preguntaalternativa());
    }

    // Retrieve all items from table
    @Override
    public List<Preguntaalternativa> list() {
        return myRepository.findAll();
    }
}