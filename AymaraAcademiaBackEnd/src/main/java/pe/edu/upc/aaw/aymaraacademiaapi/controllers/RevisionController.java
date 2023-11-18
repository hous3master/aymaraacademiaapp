package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.EstudiantequizzDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.RevisionDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Estudiantequizz;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Revision;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IEstudianteService;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IProyectoService;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IRevisionService;

import javax.swing.text.StyledEditorKit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/revision")
public class RevisionController {
    @Autowired
    private IRevisionService myService;

    @Autowired
    private IProyectoService proyectoService;

    @Autowired
    private IEstudianteService estudianteService;

    @PostMapping
    public void registrar(@RequestBody RevisionDTO dto) {
        ModelMapper m = new ModelMapper();
        Revision myItem = m.map(dto, Revision.class);
        myService.insert(myItem);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    @GetMapping("/{id}")
    public RevisionDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        RevisionDTO myItem = m.map(myService.listId(id), RevisionDTO.class);
        return myItem;
    }

    @GetMapping
    public List<RevisionDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, RevisionDTO.class);
        }).collect(Collectors.toList());
    }

    @PutMapping
    public void modificar(@RequestBody RevisionDTO dto) {
        ModelMapper m = new ModelMapper();
        Revision d = m.map(dto, Revision.class);
        myService.insert(d);
    }

    @GetMapping("/upsert/{idProyecto}/{idEstudiante}/{calificacion}/{revisado}")
    public List<RevisionDTO> insertOrUpdateRevision(@PathVariable("idProyecto") int idProyecto,@PathVariable("idEstudiante") int idEstudiante,@PathVariable("calificacion") double calificacion, @PathVariable("revisado") boolean revisado) {
        List<String[]> myList = myService.insertOrUpdateRevision(idProyecto, idEstudiante, calificacion);
        List<RevisionDTO> myListDTO = new ArrayList<>();
        for (String[] data:myList) {
            RevisionDTO dto = new RevisionDTO();
            dto.setIdRevision(Integer.parseInt(data[0]));
            dto.setProyecto(proyectoService.listId(Integer.parseInt(data[1])));
            dto.setEstudiante(estudianteService.listId(Integer.parseInt(data[2])));
            dto.setCalificacion(Double.parseDouble(data[3]));

            myListDTO.add(dto);
        }
        return myListDTO;
    }
}
