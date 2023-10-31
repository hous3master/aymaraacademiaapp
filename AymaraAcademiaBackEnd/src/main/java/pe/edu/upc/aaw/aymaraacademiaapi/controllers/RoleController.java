package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.RoleDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Role;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IRoleService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/role")
public class RoleController {
    @Autowired
    private IRoleService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody RoleDTO dto) {
        ModelMapper m = new ModelMapper();
        Role myItem = m.map(dto, Role.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/roleid")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/roleid")
    public RoleDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        RoleDTO myItem = m.map(myService.listId(id), RoleDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<RoleDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, RoleDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody RoleDTO dto) {
        ModelMapper m = new ModelMapper();
        Role d = m.map(dto, Role.class);
        myService.insert(d);
    }
}