package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Modulo;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IModuloRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IModuloService;

import java.util.List;

@Service
public class ModuloServiceImplement implements IModuloService {
    @Autowired
    private IModuloRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Modulo Modulo) {
        myRepository.save(Modulo);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idModulo){
        myRepository.deleteById(idModulo);
    }

    // Retrieve an items by ID from table
    @Override
    public Modulo listId(int idModulo){
        return myRepository.findById(idModulo).orElse(new Modulo());
    }

    // Retrieve all items from table
    @Override
    public List<Modulo> list() {
        return myRepository.findAll();
    }
}