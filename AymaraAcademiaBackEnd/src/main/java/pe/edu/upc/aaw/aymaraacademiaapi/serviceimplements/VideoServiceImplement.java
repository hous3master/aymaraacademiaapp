package pe.edu.upc.aaw.aymaraacademiaapi.serviceimplements;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.Video;
import pe.edu.upc.aaw.aymaraacademiaapi.repositories.IVideoRepository;
import pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces.IVideoService;

import java.util.List;

@Service
public class VideoServiceImplement implements IVideoService {
    @Autowired
    private IVideoRepository myRepository;

    // Add an item to table
    @Override
    public void insert(Video Video) {
        myRepository.save(Video);
    }

    // Delete an item by ID on table
    @Override
    public void delete(int idVideo){
        myRepository.deleteById(idVideo);
    }

    // Retrieve an items by ID from table
    @Override
    public Video listId(int idVideo){
        return myRepository.findById(idVideo).orElse(new Video());
    }

    // Retrieve all items from table
    @Override
    public List<Video> list() {
        return myRepository.findAll();
    }
}