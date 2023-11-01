package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.UnidadmoduloDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Unidadmodulo;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IUnidadmoduloService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/unidadmodulo")
public class UnidadmoduloController {
    @Autowired
    private IUnidadmoduloService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody UnidadmoduloDTO dto) {
        ModelMapper m = new ModelMapper();
        Unidadmodulo myItem = m.map(dto, Unidadmodulo.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public UnidadmoduloDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        UnidadmoduloDTO myItem = m.map(myService.listId(id), UnidadmoduloDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<UnidadmoduloDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, UnidadmoduloDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody UnidadmoduloDTO dto) {
        ModelMapper m = new ModelMapper();
        Unidadmodulo d = m.map(dto, Unidadmodulo.class);
        myService.insert(d);
    }
}