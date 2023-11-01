package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Cursounidad;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.ICursounidadRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.ICursounidadService;

import java.util.List;

@Service
public class CursounidadServiceImplement implements ICursounidadService {
    @Autowired
    private ICursounidadRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Cursounidad Cursounidad) {
        myRepository.save(Cursounidad);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idCursounidad){
        myRepository.deleteById(idCursounidad);
    }

    // Retrieve an items by ID from table
    @Override
    public Cursounidad listId(int idCursounidad){
        return myRepository.findById(idCursounidad).orElse(new Cursounidad());
    }

    // Retrieve all items from table
    @Override
    public List<Cursounidad> list() {
        return myRepository.findAll();
    }
}