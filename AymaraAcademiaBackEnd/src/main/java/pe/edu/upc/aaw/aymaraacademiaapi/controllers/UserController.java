package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.UserDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.User;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUserService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody UserDTO dto) {
        ModelMapper m = new ModelMapper();
        User myItem = m.map(dto, User.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public UserDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        UserDTO myItem = m.map(myService.listId(id), UserDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<UserDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, UserDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody UserDTO dto) {
        ModelMapper m = new ModelMapper();
        User d = m.map(dto, User.class);
        myService.insert(d);
    }
}