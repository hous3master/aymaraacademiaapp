package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Role;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IRoleRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IRoleService;

import java.util.List;

@Service
public class RoleServiceImplement implements IRoleService {
    @Autowired
    private IRoleRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Role Role) {
        myRepository.save(Role);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idRole){
        myRepository.deleteById(idRole);
    }

    // Retrieve an items by ID from table
    @Override
    public Role listId(int idRole){
        return myRepository.findById(idRole).orElse(new Role());
    }

    // Retrieve all items from table
    @Override
    public List<Role> list() {
        return myRepository.findAll();
    }
}