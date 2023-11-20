package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

public class CalificacionmoduloDTO {
    private String nombre;
    private double calificacionPromedio;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getCalificacionPromedio() {
        return calificacionPromedio;
    }

    public void setCalificacionPromedio(double calificacionPromedio) {
        this.calificacionPromedio = calificacionPromedio;
    }
}
