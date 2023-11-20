package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantecurso;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IEstudiantecursoRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudiantecursoService;

import java.util.List;

@Service
public class EstudiantecursoServiceImplement implements IEstudiantecursoService {

    @Autowired
    private IEstudiantecursoRepository myRepository;

    @Override
    public void insert(Estudiantecurso estudiantecurso) {
        myRepository.save(estudiantecurso);
    }

    @Override
    public void delete(int id) {
        myRepository.deleteById(id);
    }

    @Override
    public Estudiantecurso listId(int id) {
        return myRepository.findById(id).orElse(new Estudiantecurso());
    }

    @Override
    public List<Estudiantecurso> list() {
        return myRepository.findAll();
    }
}
