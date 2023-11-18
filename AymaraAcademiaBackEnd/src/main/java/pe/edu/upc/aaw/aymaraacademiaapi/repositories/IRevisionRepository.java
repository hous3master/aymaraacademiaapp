package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Revision;

import java.util.List;

@Repository
public interface IRevisionRepository extends JpaRepository<Revision, Integer> {
    @Query(value = "INSERT INTO revision (id_estudiante, id_proyecto, calificacion, revisado) VALUES (:idEstudiante, :idProyecto, :calificacion, :revisado)" +
            " ON CONFLICT (id_estudiante, id_proyecto)" +
            " DO UPDATE SET" +
            " id_revision = (SELECT id_revision FROM revision WHERE id_estudiante = :idEstudiante AND id_proyecto = :idProyecto)," +
            " id_estudiante = :idEstudiante," +
            " id_proyecto = :idProyecto" +
            " calificacion = :calificacion," +
            " RETURNING *", nativeQuery = true)
    public List<String[]> insertOrUpdateRevision(@Param("idEstudiante") int idEstudiante, @Param("idProyecto") int idProyecto, @Param("calificacion") double calificacion);
}
