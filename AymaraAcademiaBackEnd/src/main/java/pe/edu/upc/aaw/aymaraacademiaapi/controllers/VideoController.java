package pe.edu.upc.aaw.aymaraacademiaapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.aymaraacademiaapi.dtos.VideoDTO;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Video;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IVideoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/video")
public class VideoController {
    @Autowired
    private IVideoService myService;

    // Add an item to table
    @PostMapping
    public void registrar(@RequestBody VideoDTO dto) {
        ModelMapper m = new ModelMapper();
        Video myItem = m.map(dto, Video.class);
        myService.insert(myItem);
    }

    // Delete an item by ID on table
    @DeleteMapping("/videoid")
    public void eliminar(@PathVariable("id")Integer id){
        myService.delete(id);
    }

    // Retrieve an items by ID from table
    @GetMapping("/videoid")
    public VideoDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m = new ModelMapper();
        VideoDTO myItem = m.map(myService.listId(id), VideoDTO.class);
        return myItem;
    }

    // Retrieve all items from table
    @GetMapping
    public List<VideoDTO> listar(){
        return myService.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, VideoDTO.class);
        }).collect(Collectors.toList());
    }

    // (Exclusive to controller) Modify values on table
    @PutMapping
    public void modificar(@RequestBody VideoDTO dto) {
        ModelMapper m = new ModelMapper();
        Video d = m.map(dto, Video.class);
        myService.insert(d);
    }
}