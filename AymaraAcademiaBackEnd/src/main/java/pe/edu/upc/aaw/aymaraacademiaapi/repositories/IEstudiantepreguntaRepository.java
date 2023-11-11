package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantepregunta;
import java.util.List;

@Repository
public interface IEstudiantepreguntaRepository extends JpaRepository<Estudiantepregunta, Integer> {

    @Query(value = "INSERT INTO estudiantepregunta (correcta, id_estudiante, id_pregunta) VALUES (:correcta, :idEstudiante, :idPregunta)" +
            " ON CONFLICT (id_estudiante, id_pregunta)" +
            " DO UPDATE SET" +
            " id_estudiantepregunta = (SELECT id_estudiantepregunta FROM estudiantepregunta WHERE id_estudiante = :idEstudiante AND id_pregunta = :idPregunta)," +
            " correcta = :correcta," +
            " id_estudiante = :idEstudiante," +
            " id_pregunta = :idPregunta" +
            " RETURNING *", nativeQuery = true)
    public List<String[]> insertOrUpdateEstudiantePregunta(@Param("correcta") boolean correcta, @Param("idEstudiante") int idEstudiante, @Param("idPregunta") int idPregunta);
}