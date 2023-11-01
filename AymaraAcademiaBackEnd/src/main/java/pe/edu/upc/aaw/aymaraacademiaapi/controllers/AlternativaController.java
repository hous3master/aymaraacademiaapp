package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.AlternativaDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Alternativa;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IAlternativaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/alternativa")
public class AlternativaController {
    @Autowired
    private IAlternativaService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody AlternativaDTO dto) {
        ModelMapper m = new ModelMapper();
        Alternativa myItem = m.map(dto, Alternativa.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public AlternativaDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        AlternativaDTO myItem = m.map(myService.listId(id), AlternativaDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<AlternativaDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, AlternativaDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody AlternativaDTO dto) {
        ModelMapper m = new ModelMapper();
        Alternativa d = m.map(dto, Alternativa.class);
        myService.insert(d);
    }
}