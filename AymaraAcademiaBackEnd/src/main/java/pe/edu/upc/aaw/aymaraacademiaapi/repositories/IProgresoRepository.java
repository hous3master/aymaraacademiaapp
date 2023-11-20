package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Progreso;
import java.util.List;

@Repository
public interface IProgresoRepository extends JpaRepository<Progreso, Integer> {
    @Query(value = "SELECT e.nombre AS nombre_estudiante, m.nombre AS nombre_modulo, COALESCE(p.progreso, 0) AS porcentaje_avance " +
            "FROM estudiante e " +
            "CROSS JOIN modulo m " +
            "LEFT JOIN progreso p ON e.id_estudiante = p.id_estudiante AND m.id_modulo = p.id_modulo",
            nativeQuery = true)
    List<String[]> obtenerAvanceEstudiantes();
}