package pe.edu.upc.aaw.aymaraacademiaapi.dtos;

import pe.edu.upc.aaw.aymaraacademiaapi.entities.*;
import java.time.LocalDate;

public class UnidadmoduloDTO {
    private int idUnidadmodulo;
    private Unidad unidad;
    private Modulo modulo;

    public int getIdUnidadmodulo() {
        return idUnidadmodulo;
    }

    public void setIdUnidadmodulo(int idUnidadmodulo) {
        this.idUnidadmodulo = idUnidadmodulo;
    }

    public Unidad getUnidad() {
        return unidad;
    }

    public void setUnidad(Unidad unidad) {
        this.unidad = unidad;
    }

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }

}