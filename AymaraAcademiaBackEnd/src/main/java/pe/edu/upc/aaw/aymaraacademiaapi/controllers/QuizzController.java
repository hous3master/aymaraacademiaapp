package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.QuizzDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Quizz;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IQuizzService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/quizz")
public class QuizzController {
    @Autowired
    private IQuizzService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody QuizzDTO dto) {
        ModelMapper m = new ModelMapper();
        Quizz myItem = m.map(dto, Quizz.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public QuizzDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        QuizzDTO myItem = m.map(myService.listId(id), QuizzDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<QuizzDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, QuizzDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody QuizzDTO dto) {
        ModelMapper m = new ModelMapper();
        Quizz d = m.map(dto, Quizz.class);
        myService.insert(d);
    }
}