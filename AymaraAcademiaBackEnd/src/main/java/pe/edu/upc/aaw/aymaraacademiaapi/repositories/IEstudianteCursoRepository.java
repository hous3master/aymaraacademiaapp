package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.EstudianteCurso;

@Repository
public interface IEstudianteCursoRepository extends JpaRepository<EstudianteCurso, Integer> {
}
