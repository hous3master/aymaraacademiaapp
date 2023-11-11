package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.CursoDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Curso;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.ICursoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/curso")
public class CursoController {
    @Autowired
    private ICursoService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody CursoDTO dto) {
        ModelMapper m = new ModelMapper();
        Curso myItem = m.map(dto, Curso.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public CursoDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        CursoDTO myItem = m.map(myService.listId(id), CursoDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<CursoDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, CursoDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody CursoDTO dto) {
        ModelMapper m = new ModelMapper();
        Curso d = m.map(dto, Curso.class);
        myService.insert(d);
    }
}