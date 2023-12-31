package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.CalificacionmoduloDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.ModuloDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Modulo;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IModuloService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/modulo")
public class ModuloController {
    @Autowired
    private IModuloService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody ModuloDTO dto) {
        ModelMapper m = new ModelMapper();
        Modulo myItem = m.map(dto, Modulo.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/{id}")
    public ModuloDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        ModuloDTO myItem = m.map(myService.listId(id), ModuloDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<ModuloDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, ModuloDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody ModuloDTO dto) {
        ModelMapper m = new ModelMapper();
        Modulo d = m.map(dto, Modulo.class);
        myService.insert(d);
    }

    @GetMapping("/promediocalificaciones")
    public List<CalificacionmoduloDTO> calcular(){
        List<String[]>lista=myService.obtenerCalificacionPromedioPorModulo();
        List<CalificacionmoduloDTO> lista2=new ArrayList<>();
        for(String[] data: lista){
            CalificacionmoduloDTO dto=new CalificacionmoduloDTO();
            dto.setNombre(data[0]);
            dto.setCalificacionPromedio(Double.parseDouble(data[1]));
            lista2.add(dto);
        }
        return lista2 ;
    }
}