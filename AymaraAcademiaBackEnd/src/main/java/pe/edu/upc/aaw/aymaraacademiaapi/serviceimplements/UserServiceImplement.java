package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.User;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IUserRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUserService;

import java.util.List;

@Service
public class UserServiceImplement implements IUserService {
    @Autowired
    private IUserRepository myRepository;

    // Add an item to table
    @Override
    public void insert(User User) {
        myRepository.save(User);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idUser){
        myRepository.deleteById(idUser);
    }

    // Retrieve an items by ID from table
    @Override
    public User listId(int idUser){
        return myRepository.findById(idUser).orElse(new User());
    }

    // Retrieve all items from table
    @Override
    public List<User> list() {
        return myRepository.findAll();
    }
}