/** Nombres canónicos de las 5 líneas — fuente única para calificador y cards. */
export const LINEAS_PRODUCTO = [
  "Pijamas para moto",
  "Impermeables",
  "Eslaiders",
  "Pulpos y mallas de caucho",
  "Mallas para vehículo",
] as const;

export type LineaProducto = (typeof LINEAS_PRODUCTO)[number];

/** Ciudades frecuentes de distribuidores — un toque, sin formulario. */
export const CIUDADES_DISTRIBUIDOR = [
  "Medellín",
  "Bogotá",
  "Cali",
  "Barranquilla",
  "Bucaramanga",
  "Cartagena",
  "Otra ciudad",
] as const;

export type CiudadDistribuidor = (typeof CIUDADES_DISTRIBUIDOR)[number];
