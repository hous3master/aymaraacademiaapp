package pe.edu.upc.aaw.aymaraacademiaapi.entities;

import javax.persistence.*;
import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

@Entity
@Table(name = "Video")
public class Video {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idVideo;

@Column(name = "url", nullable = true)
private String url;

@Column(name = "titulo", nullable = true)
private String titulo;

@Column(name = "descripcion", nullable = true, columnDefinition = "TEXT")
private String descripcion;

@Column(name = "duracion", nullable = true)
private double duracion;

@Column(name = "presentador", nullable = true)
private String presentador;

@Column(name = "transcripcion", nullable = true, columnDefinition = "TEXT")
private String transcripcion;

@ManyToOne
@JoinColumn(name = "idModulo")
private Modulo modulo;

public Video() { }

public Video(int idVideo,String url, String titulo, String descripcion, double duracion, String presentador, String transcripcion, Modulo modulo) {
    this.idVideo = idVideo;
    this.url = url;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.presentador = presentador;
    this.transcripcion = transcripcion;
    this.modulo = modulo;
}

public int getIdVideo() {
    return idVideo;
}

public void setIdVideo(int idVideo) {
    this.idVideo = idVideo;
}

public String getUrl() {
    return url;
}

public void setUrl(String url) {
    this.url = url;
}

public String getTitulo() {
    return titulo;
}

public void setTitulo(String titulo) {
    this.titulo = titulo;
}

public String getDescripcion() {
    return descripcion;
}

public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
}

public double getDuracion() {
    return duracion;
}

public void setDuracion(double duracion) {
    this.duracion = duracion;
}

public String getPresentador() {
    return presentador;
}

public void setPresentador(String presentador) {
    this.presentador = presentador;
}

public String getTranscripcion() {
    return transcripcion;
}

public void setTranscripcion(String transcripcion) {
    this.transcripcion = transcripcion;
}

public Modulo getModulo() {
    return modulo;
}

public void setModulo(Modulo modulo) {
    this.modulo = modulo;
}

}