package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.EstudiantepreguntaDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.EstudiantequizzDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantequizz;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudianteService;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudiantequizzService;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IQuizzService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/estudiantequizz")
public class EstudiantequizzController {
    @Autowired
    private IEstudiantequizzService myService;

    @Autowired
    private IEstudianteService estudianteService;

    @Autowired
    private IQuizzService quizzService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody EstudiantequizzDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiantequizz myItem = m.map(dto, Estudiantequizz.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public EstudiantequizzDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        EstudiantequizzDTO myItem = m.map(myService.listId(id), EstudiantequizzDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<EstudiantequizzDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, EstudiantequizzDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody EstudiantequizzDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiantequizz d = m.map(dto, Estudiantequizz.class);
        myService.insert(d);
    }

    //insertOrUpdateEstudianteQuizz(double calificacion, int idEstudiante, int idQuizz)
    @GetMapping("/upsert/{calificacion}/{idEstudiante}/{idQuizz}")
    public List<EstudiantequizzDTO> insertOrUpdateEstudiantePregunta(@PathVariable("calificacion") double calificacion, @PathVariable("idEstudiante") int idEstudiante, @PathVariable("idQuizz") int idQuizz) {
        List<String[]> myList = myService.insertOrUpdateEstudianteQuizz(calificacion, idEstudiante, idQuizz);
        List<EstudiantequizzDTO> myListDTO = new ArrayList<>();
        for (String[] data:myList) {
            EstudiantequizzDTO dto = new EstudiantequizzDTO();
            dto.setIdEstudiantequizz(Integer.parseInt(data[0]));
            dto.setCalificacion(Double.parseDouble(data[1]));
            dto.setEstudiante(estudianteService.listId(Integer.parseInt(data[2])));
            dto.setQuizz(quizzService.listId(Integer.parseInt(data[3])));

            myListDTO.add(dto);
        }
        return myListDTO;
    }
}