package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.AvanceestudianteDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.ProgresoDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Progreso;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IProgresoService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/progreso")
public class ProgresoController {
    @Autowired
    private IProgresoService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody ProgresoDTO dto) {
        ModelMapper m = new ModelMapper();
        Progreso myItem = m.map(dto, Progreso.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public ProgresoDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        ProgresoDTO myItem = m.map(myService.listId(id), ProgresoDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<ProgresoDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, ProgresoDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody ProgresoDTO dto) {
        ModelMapper m = new ModelMapper();
        Progreso d = m.map(dto, Progreso.class);
        myService.insert(d);
    }
    @GetMapping("/avanceEstudiantes")
    public List<AvanceestudianteDTO> obtenerAvanceEstudiantes() {
        List<String[]> lista = myService.obtenerAvanceEstudiantes();
        List<AvanceestudianteDTO> listaDTO = new ArrayList<>();

        for (String[] data : lista) {
            AvanceestudianteDTO dto = new AvanceestudianteDTO();
            dto.setNombreEstudiante(data[0]);
            dto.setNombreModulo(data[1]);
            dto.setPorcentajeAvance(Double.parseDouble(data[2]));
            listaDTO.add(dto);
        }

        return listaDTO;
    }
}