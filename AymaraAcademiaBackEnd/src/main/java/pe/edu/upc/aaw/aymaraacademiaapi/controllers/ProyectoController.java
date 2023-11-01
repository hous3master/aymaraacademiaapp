package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.ProyectoDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Proyecto;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IProyectoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/proyecto")
public class ProyectoController {
    @Autowired
    private IProyectoService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody ProyectoDTO dto) {
        ModelMapper m = new ModelMapper();
        Proyecto myItem = m.map(dto, Proyecto.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public ProyectoDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        ProyectoDTO myItem = m.map(myService.listId(id), ProyectoDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<ProyectoDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, ProyectoDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody ProyectoDTO dto) {
        ModelMapper m = new ModelMapper();
        Proyecto d = m.map(dto, Proyecto.class);
        myService.insert(d);
    }
}