package pe.edu.upc.aaw.aymaraacademiaapi.serviceinterfaces;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.Video;
import java.util.List;

public interface IVideoService {
    void insert(Video Video);
    void delete(int id);
    Video listId(int id);
    List<Video> list();
}