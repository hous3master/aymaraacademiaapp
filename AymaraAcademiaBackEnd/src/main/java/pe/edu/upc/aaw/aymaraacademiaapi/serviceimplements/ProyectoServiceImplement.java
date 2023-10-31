package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Proyecto;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IProyectoRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IProyectoService;

import java.util.List;

@Service
public class ProyectoServiceImplement implements IProyectoService {
    @Autowired
    private IProyectoRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Proyecto Proyecto) {
        myRepository.save(Proyecto);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idProyecto){
        myRepository.deleteById(idProyecto);
    }

    // Retrieve an items by ID from table
    @Override
    public Proyecto listId(int idProyecto){
        return myRepository.findById(idProyecto).orElse(new Proyecto());
    }

    // Retrieve all items from table
    @Override
    public List<Proyecto> list() {
        return myRepository.findAll();
    }
}