package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.EstudiantepreguntaDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantepregunta;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudianteService;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudiantepreguntaService;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IPreguntaService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/estudiantepregunta")
public class EstudiantepreguntaController {
    @Autowired
    private IEstudiantepreguntaService myService;

    @Autowired
    private IEstudianteService estudianteService;
    @Autowired
    private IPreguntaService preguntaService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody EstudiantepreguntaDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiantepregunta myItem = m.map(dto, Estudiantepregunta.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public EstudiantepreguntaDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        EstudiantepreguntaDTO myItem = m.map(myService.listId(id), EstudiantepreguntaDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<EstudiantepreguntaDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, EstudiantepreguntaDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody EstudiantepreguntaDTO dto) {
        ModelMapper m = new ModelMapper();
        Estudiantepregunta d = m.map(dto, Estudiantepregunta.class);
        myService.insert(d);
    }

    @GetMapping("/upsert/{correcta}/{idEstudiante}/{idPregunta}")
    public List<EstudiantepreguntaDTO> insertOrUpdateEstudiantePregunta(@PathVariable("correcta") boolean correcta, @PathVariable("idEstudiante") int idEstudiante, @PathVariable("idPregunta") int idPregunta) {
        List<String[]> myList = myService.insertOrUpdateEstudiantePregunta(correcta, idEstudiante, idPregunta);
        List<EstudiantepreguntaDTO> myListDTO = new ArrayList<>();
        for (String[] data:myList) {
            EstudiantepreguntaDTO dto = new EstudiantepreguntaDTO();
            dto.setIdEstudiantepregunta(Integer.parseInt(data[0]));
            dto.setCorrecta(Boolean.parseBoolean(data[1]));
            dto.setEstudiante(estudianteService.listId(Integer.parseInt(data[2])));
            dto.setPregunta(preguntaService.listId(Integer.parseInt(data[3])));

            myListDTO.add(dto);
        }
        return myListDTO;
    }
}