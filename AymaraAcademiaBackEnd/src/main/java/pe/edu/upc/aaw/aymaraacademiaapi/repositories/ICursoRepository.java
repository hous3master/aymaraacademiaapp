package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Curso;
import java.util.List;

@Repository
public interface ICursoRepository extends JpaRepository<Curso, Integer> {
    @Query(value = "SELECT c.nombre as curso, AVG(e.edad) as promedio_edad\n" +
            "        FROM Curso c\n" +
            "        LEFT JOIN estudiantecurso ec ON c.id_curso = ec.id_curso\n" +
            "        LEFT JOIN Estudiante e ON ec.id_estudiante = e.id_estudiante\n" +
            "        GROUP BY c.id_curso;", nativeQuery = true)
    public List<String[]> obtenerEdadPromedioPorCurso();
}