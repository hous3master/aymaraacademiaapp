package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.PreguntaDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Pregunta;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IPreguntaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pregunta")
public class PreguntaController {
    @Autowired
    private IPreguntaService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody PreguntaDTO dto) {
        ModelMapper m = new ModelMapper();
        Pregunta myItem = m.map(dto, Pregunta.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public PreguntaDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        PreguntaDTO myItem = m.map(myService.listId(id), PreguntaDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<PreguntaDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, PreguntaDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody PreguntaDTO dto) {
        ModelMapper m = new ModelMapper();
        Pregunta d = m.map(dto, Pregunta.class);
        myService.insert(d);
    }
}