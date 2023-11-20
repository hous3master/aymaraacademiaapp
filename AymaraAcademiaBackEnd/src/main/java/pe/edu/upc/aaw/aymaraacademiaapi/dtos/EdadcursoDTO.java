package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

public class EdadcursoDTO {
    private String curso;
    private double edadPromedio;

    public String getCurso() {
        return curso;
    }

    public void setCurso(String nombre) {
        this.curso = nombre;
    }

    public double getEdadPromedio() {
        return edadPromedio;
    }

    public void setEdadPromedio(double edadPromedio) {
        this.edadPromedio = edadPromedio;
    }
}
