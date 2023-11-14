package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.EstudianteCurso;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IEstudianteCursoRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudianteCursoService;

import java.util.List;

@Service
public class EstudianteCursoServiceImplement implements IEstudianteCursoService {
    @Autowired
    private IEstudianteCursoRepository myRepository;

    @Override
    public void insert(EstudianteCurso estudianteCurso) {
        myRepository.save(estudianteCurso);
    }

    @Override
    public void delete(int id) {
        myRepository.deleteById(id);
    }

    @Override
    public EstudianteCurso listId(int id) {
        return myRepository.findById(id).orElse(new EstudianteCurso());
    }

    @Override
    public List<EstudianteCurso> list() {
        return myRepository.findAll();
    }
}
