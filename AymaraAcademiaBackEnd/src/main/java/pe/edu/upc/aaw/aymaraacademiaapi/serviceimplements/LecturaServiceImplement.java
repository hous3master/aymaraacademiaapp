package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Lectura;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.ILecturaRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.ILecturaService;

import java.util.List;

@Service
public class LecturaServiceImplement implements ILecturaService {
    @Autowired
    private ILecturaRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Lectura Lectura) {
        myRepository.save(Lectura);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idLectura){
        myRepository.deleteById(idLectura);
    }

    // Retrieve an items by ID from table
    @Override
    public Lectura listId(int idLectura){
        return myRepository.findById(idLectura).orElse(new Lectura());
    }

    // Retrieve all items from table
    @Override
    public List<Lectura> list() {
        return myRepository.findAll();
    }
}