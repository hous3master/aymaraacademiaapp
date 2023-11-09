package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.UsersDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Users;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUsersService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private IUsersService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody UsersDTO dto) {
        ModelMapper m = new ModelMapper();
        Users myItem = m.map(dto, Users.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Long id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public UsersDTO listarId(@PathVariable("id")Long id){
        ModelMapper m = new ModelMapper();
        UsersDTO myItem = m.map(myService.listId(id), UsersDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<UsersDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, UsersDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody UsersDTO dto) {
        ModelMapper m = new ModelMapper();
        Users d = m.map(dto, Users.class);
        myService.insert(d);
    }
}