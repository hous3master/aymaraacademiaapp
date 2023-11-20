package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Curso;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.ICursoRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.ICursoService;

import java.util.List;

@Service
public class CursoServiceImplement implements ICursoService {
    @Autowired
    private ICursoRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Curso Curso) {
        myRepository.save(Curso);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idCurso){
        myRepository.deleteById(idCurso);
    }

    // Retrieve an items by ID from table
    @Override
    public Curso listId(int idCurso){
        return myRepository.findById(idCurso).orElse(new Curso());
    }

    // Retrieve all items from table
    @Override
    public List<Curso> list() {
        return myRepository.findAll();
    }

    @Override
    public List<String[]> obtenerEdadPromedioPorCurso() {
        return myRepository.obtenerEdadPromedioPorCurso();
    }
}