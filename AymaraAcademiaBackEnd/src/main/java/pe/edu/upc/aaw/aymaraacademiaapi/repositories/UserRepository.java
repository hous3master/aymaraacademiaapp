package pe.edu.upc.aaw.aymaraacademiaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long>{
    public Users findByUsername(String username);

    //BUSCAR POR NOMBRE
    @Query("select count(u.username) from Users u where u.username =:username")
    public int buscarUsername(@Param("username") String nombre);

    //ELIMINAR ROL POR ID
    @Modifying
    @Query("DELETE FROM Role r WHERE r.user.id = :userId")
    void deleteRolesByUserId(@Param("userId") Long userId);

    //ELIMINAR USUARIO POR ID
    @Modifying
    @Query("DELETE FROM Users u WHERE u.id = :userId")
    void deleteById(@Param("userId") Long userId);

    //INSERTAR ROLES
    @Transactional
    @Modifying
    @Query(value = "insert into roles (rol, user_id) VALUES (:rol, :user_id)", nativeQuery = true)
    public void insRol(@Param("rol") String authority, @Param("user_id") Long user_id);
}
