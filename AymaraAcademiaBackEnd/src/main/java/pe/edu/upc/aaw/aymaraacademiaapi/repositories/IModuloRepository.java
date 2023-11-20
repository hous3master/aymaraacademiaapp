package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.CalificacionmoduloDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Modulo;
import java.util.List;

@Repository
public interface IModuloRepository extends JpaRepository<Modulo, Integer> {
    @Query(value = "SELECT m.nombre, AVG(eq.calificacion)\n" +
            "FROM quizz q\n" +
            "JOIN estudiantequizz eq ON q.id_quizz = eq.id_quizz\n" +
            "JOIN modulo m ON q.id_modulo = m.id_modulo\n" +
            "GROUP BY m.nombre\n", nativeQuery = true)
    public List<String[]> obtenerCalificacionPromedioPorModulo();
}