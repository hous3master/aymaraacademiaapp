package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.EstudianteCursoDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.EstudianteCurso;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudianteCursoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/estudiantecurso")
public class EstudianteCursoController {
    @Autowired
    private IEstudianteCursoService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody EstudianteCursoDTO dto) {
        ModelMapper m = new ModelMapper();
        EstudianteCurso myItem = m.map(dto, EstudianteCurso.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public EstudianteCursoDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        EstudianteCursoDTO myItem = m.map(myService.listId(id), EstudianteCursoDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<EstudianteCursoDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, EstudianteCursoDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody EstudianteCursoDTO dto) {
        ModelMapper m = new ModelMapper();
        EstudianteCurso d = m.map(dto, EstudianteCurso.class);
        myService.insert(d);
    }
}
