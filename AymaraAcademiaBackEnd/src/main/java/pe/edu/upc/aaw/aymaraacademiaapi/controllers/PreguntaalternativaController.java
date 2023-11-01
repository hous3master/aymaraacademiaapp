package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.PreguntaalternativaDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Preguntaalternativa;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IPreguntaalternativaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/preguntaalternativa")
public class PreguntaalternativaController {
    @Autowired
    private IPreguntaalternativaService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody PreguntaalternativaDTO dto) {
        ModelMapper m = new ModelMapper();
        Preguntaalternativa myItem = m.map(dto, Preguntaalternativa.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public PreguntaalternativaDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        PreguntaalternativaDTO myItem = m.map(myService.listId(id), PreguntaalternativaDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<PreguntaalternativaDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, PreguntaalternativaDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody PreguntaalternativaDTO dto) {
        ModelMapper m = new ModelMapper();
        Preguntaalternativa d = m.map(dto, Preguntaalternativa.class);
        myService.insert(d);
    }
}