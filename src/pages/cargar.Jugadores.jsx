import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { post } from "../services/utils.services";

const CargarJugador = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [idEstado, setIdEstado] = useState("");
  const [contacto, setContacto] = useState("");
  const rolsave = sessionStorage.getItem("rol");
  console.log(rolsave);

  if (rolsave != 6323) {
    return <h1> no tiene permisos para acceder a esta ruta</h1>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const jugadorData = {
      nombre,
      apellido,
      edad: parseInt(edad, 10),
      id_categoria: parseInt(idCategoria, 10),
      id_estado: parseInt(idEstado, 10),
      contacto,
    };

    try {
      const response = await post("/cargar-jugador", jugadorData);
      if (response.ok) {
        alert("Jugador agregado correctamente");
        setNombre("");
        setApellido("");
        setEdad("");
        setIdCategoria("");
        setIdEstado("");
        setContacto("");
      } else {
        alert(response.message || "Error al agregar el jugador");
      }
    } catch (error) {
      console.error("Error al agregar el jugador:", error);
      alert("Hubo un error al agregar el jugador");
    }
  };

  return (
    <div>
      <Header />
      <h2>Cargar Nuevo Jugador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
            required
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            placeholder="Edad"
            required
            min="1"
          />
        </div>
        <div>
          <label>Categoría:</label>
          <select
            value={idCategoria}
            onChange={(e) => setIdCategoria(e.target.value)}
            required
          >
            <option value="">Seleccionar Categoría</option>
            <option value="1">Categoría 1</option>
            <option value="2">Categoría 2</option>
            <option value="3">Categoría 3</option>
          </select>
        </div>
        <div>
          <label>Estado:</label>
          <select
            value={idEstado}
            onChange={(e) => setIdEstado(e.target.value)}
            required
          >
            <option value="">Seleccionar Estado</option>
            <option value="1">Activo</option>
            <option value="2">Inactivo</option>
          </select>
        </div>
        <div>
          <label>Contacto:</label>
          <input
            type="text"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            placeholder="Contacto"
            required
          />
        </div>
        <button type="submit">Agregar Jugador</button>
      </form>
    </div>
  );
};
export default CargarJugador;
