package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.UnidadDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Unidad;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUnidadService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/unidad")
public class UnidadController {
    @Autowired
    private IUnidadService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody UnidadDTO dto) {
        ModelMapper m = new ModelMapper();
        Unidad myItem = m.map(dto, Unidad.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public UnidadDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        UnidadDTO myItem = m.map(myService.listId(id), UnidadDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<UnidadDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, UnidadDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody UnidadDTO dto) {
        ModelMapper m = new ModelMapper();
        Unidad d = m.map(dto, Unidad.class);
        myService.insert(d);
    }
}