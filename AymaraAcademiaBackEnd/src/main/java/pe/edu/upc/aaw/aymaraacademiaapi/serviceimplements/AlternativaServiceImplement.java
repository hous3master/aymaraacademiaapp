package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Alternativa;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IAlternativaRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IAlternativaService;

import java.util.List;

@Service
public class AlternativaServiceImplement implements IAlternativaService {
    @Autowired
    private IAlternativaRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Alternativa Alternativa) {
        myRepository.save(Alternativa);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idAlternativa){
        myRepository.deleteById(idAlternativa);
    }

    // Retrieve an items by ID from table
    @Override
    public Alternativa listId(int idAlternativa){
        return myRepository.findById(idAlternativa).orElse(new Alternativa());
    }

    // Retrieve all items from table
    @Override
    public List<Alternativa> list() {
        return myRepository.findAll();
    }
}