package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantecurso;

@Repository
public interface IEstudiantecursoRepository extends JpaRepository<Estudiantecurso, Integer> {
}
