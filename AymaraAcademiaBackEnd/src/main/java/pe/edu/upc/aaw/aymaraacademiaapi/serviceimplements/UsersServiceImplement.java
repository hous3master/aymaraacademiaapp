package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Users;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.UserRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUsersService;

import java.util.List;

@Service
public class UsersServiceImplement implements IUsersService {
    @Autowired
    private UserRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Users Users) {
        myRepository.save(Users);
    }

    // Delete an item by ID on table
    @Override
    @Transactional
    public void delete(Long idUsers) {
        myRepository.deleteRolesByUserId(idUsers);
        myRepository.deleteById(idUsers);
    }

    // Retrieve an items by ID from table
    @Override
    public Users listId(Long idUsers){
        return myRepository.findById(idUsers).orElse(new Users());
    }

    // Retrieve all items from table
    @Override
    public List<Users> list() {
        return myRepository.findAll();
    }

    @Override
    public void insertRoleForUser(Long userId, String roleName) {
        myRepository.insRol(roleName, userId);
    }
}