package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.LecturaDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Lectura;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.ILecturaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/lectura")
public class LecturaController {
    @Autowired
    private ILecturaService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody LecturaDTO dto) {
        ModelMapper m = new ModelMapper();
        Lectura myItem = m.map(dto, Lectura.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public LecturaDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        LecturaDTO myItem = m.map(myService.listId(id), LecturaDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<LecturaDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, LecturaDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody LecturaDTO dto) {
        ModelMapper m = new ModelMapper();
        Lectura d = m.map(dto, Lectura.class);
        myService.insert(d);
    }
}