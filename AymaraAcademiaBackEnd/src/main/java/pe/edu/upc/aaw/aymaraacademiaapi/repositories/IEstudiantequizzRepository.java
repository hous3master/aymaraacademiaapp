package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantequizz;
import java.util.List;

@Repository
public interface IEstudiantequizzRepository extends JpaRepository<Estudiantequizz, Integer> {
    @Query(value = "INSERT INTO estudiantequizz (calificacion, id_estudiante, id_quizz) VALUES (:calificacion, :idEstudiante, :idQuizz)" +
            " ON CONFLICT (id_estudiante, id_quizz)" +
            " DO UPDATE SET" +
            " id_estudiantequizz = (SELECT id_estudiantequizz FROM estudiantequizz WHERE id_estudiante = :idEstudiante AND id_quizz = :idQuizz)," +
            " calificacion = :calificacion," +
            " id_estudiante = :idEstudiante," +
            " id_quizz = :idQuizz" +
            " RETURNING *", nativeQuery = true)
    public List<String[]> insertOrUpdateEstudianteQuizz(@Param("calificacion") double calificacion, @Param("idEstudiante") int idEstudiante, @Param("idQuizz") int idQuizz);

}