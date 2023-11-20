package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.EstudiantecursoDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantecurso;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudiantecursoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/estudiantecurso")
public class EstudiantecursoController {
    @Autowired
    private IEstudiantecursoService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody EstudiantecursoDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiantecurso myItem = m.map(dto, Estudiantecurso.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public EstudiantecursoDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        EstudiantecursoDTO myItem = m.map(myService.listId(id), EstudiantecursoDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<EstudiantecursoDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, EstudiantecursoDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody EstudiantecursoDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiantecurso d = m.map(dto, Estudiantecurso.class);
        myService.insert(d);
    }

}
