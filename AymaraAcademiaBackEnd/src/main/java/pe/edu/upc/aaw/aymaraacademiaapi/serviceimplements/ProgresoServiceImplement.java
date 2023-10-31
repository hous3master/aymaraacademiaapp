package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Progreso;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IProgresoRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IProgresoService;

import java.util.List;

@Service
public class ProgresoServiceImplement implements IProgresoService {
    @Autowired
    private IProgresoRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Progreso Progreso) {
        myRepository.save(Progreso);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idProgreso){
        myRepository.deleteById(idProgreso);
    }

    // Retrieve an items by ID from table
    @Override
    public Progreso listId(int idProgreso){
        return myRepository.findById(idProgreso).orElse(new Progreso());
    }

    // Retrieve all items from table
    @Override
    public List<Progreso> list() {
        return myRepository.findAll();
    }
}