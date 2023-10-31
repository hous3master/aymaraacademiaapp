package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.EstudianteDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiante;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudianteService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/estudiante")
public class EstudianteController {
    @Autowired
    private IEstudianteService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody EstudianteDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiante myItem = m.map(dto, Estudiante.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/estudianteid")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/estudianteid")
    public EstudianteDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        EstudianteDTO myItem = m.map(myService.listId(id), EstudianteDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<EstudianteDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, EstudianteDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody EstudianteDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiante d = m.map(dto, Estudiante.class);
        myService.insert(d);
    }
}