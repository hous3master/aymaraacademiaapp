package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Unidad;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IUnidadRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUnidadService;

import java.util.List;

@Service
public class UnidadServiceImplement implements IUnidadService {
    @Autowired
    private IUnidadRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Unidad Unidad) {
        myRepository.save(Unidad);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idUnidad){
        myRepository.deleteById(idUnidad);
    }

    // Retrieve an items by ID from table
    @Override
    public Unidad listId(int idUnidad){
        return myRepository.findById(idUnidad).orElse(new Unidad());
    }

    // Retrieve all items from table
    @Override
    public List<Unidad> list() {
        return myRepository.findAll();
    }
}