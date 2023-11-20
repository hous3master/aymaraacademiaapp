package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Revision;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IRevisionRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IRevisionService;

import java.util.List;

@Service
public class RevisionServiceImplement implements IRevisionService {
    @Autowired
    private IRevisionRepository myRepository;

    @Override
    public void insert(Revision Revision) {
        myRepository.save(Revision);
    }

    @Override
    public void delete(int idRevision) {
        myRepository.deleteById(idRevision);
    }

    @Override
    public Revision listId(int idRevision) {
        return myRepository.findById(idRevision).orElse(new Revision());
    }

    @Override
    public List<Revision> list() {
        return myRepository.findAll();
    }

    @Override
    public List<String[]> insertOrUpdateRevision(int idEstudiante, int idProyecto, double calificacion) {
        return myRepository.insertOrUpdateRevision(idEstudiante, idProyecto, calificacion);
    }
}
