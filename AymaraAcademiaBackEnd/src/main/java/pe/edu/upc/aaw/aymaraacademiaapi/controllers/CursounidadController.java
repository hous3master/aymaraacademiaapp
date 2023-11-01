package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.CursounidadDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Cursounidad;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.ICursounidadService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cursounidad")
public class CursounidadController {
    @Autowired
    private ICursounidadService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody CursounidadDTO dto) {
        ModelMapper m = new ModelMapper();
        Cursounidad myItem = m.map(dto, Cursounidad.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public CursounidadDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        CursounidadDTO myItem = m.map(myService.listId(id), CursounidadDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<CursounidadDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, CursounidadDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody CursounidadDTO dto) {
        ModelMapper m = new ModelMapper();
        Cursounidad d = m.map(dto, Cursounidad.class);
        myService.insert(d);
    }
}