package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiante;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IEstudianteRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudianteService;

import java.util.List;

@Service
public class EstudianteServiceImplement implements IEstudianteService {
    @Autowired
    private IEstudianteRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Estudiante Estudiante) {
        myRepository.save(Estudiante);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idEstudiante){
        myRepository.deleteById(idEstudiante);
    }

    // Retrieve an items by ID from table
    @Override
    public Estudiante listId(int idEstudiante){
        return myRepository.findById(idEstudiante).orElse(new Estudiante());
    }

    // Retrieve all items from table
    @Override
    public List<Estudiante> list() {
        return myRepository.findAll();
    }
}