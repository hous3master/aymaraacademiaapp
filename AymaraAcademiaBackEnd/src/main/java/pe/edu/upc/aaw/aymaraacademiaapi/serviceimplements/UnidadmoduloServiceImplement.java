package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Unidadmodulo;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IUnidadmoduloRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUnidadmoduloService;

import java.util.List;

@Service
public class UnidadmoduloServiceImplement implements IUnidadmoduloService {
    @Autowired
    private IUnidadmoduloRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Unidadmodulo Unidadmodulo) {
        myRepository.save(Unidadmodulo);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idUnidadmodulo){
        myRepository.deleteById(idUnidadmodulo);
    }

    // Retrieve an items by ID from table
    @Override
    public Unidadmodulo listId(int idUnidadmodulo){
        return myRepository.findById(idUnidadmodulo).orElse(new Unidadmodulo());
    }

    // Retrieve all items from table
    @Override
    public List<Unidadmodulo> list() {
        return myRepository.findAll();
    }
}