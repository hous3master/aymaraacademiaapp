package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiante;
import java.util.List;

@Repository
public interface IEstudianteRepository extends JpaRepository<Estudiante, Integer> {
    @Query(value = "SELECT * FROM estudiante as e WHERE id = (SELECT u.id FROM users as u WHERE u.username = :name)", nativeQuery = true)
    public List<String[]> findEstudianteByUserUsername(@Param("name") String name);
}