import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import StyledInput from "../components/StyledInput";
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




  const handleSubmit = async (e) => {
   

    const jugadorData = {
      nombre,
      apellido,
      edad: parseInt(edad, 10), // el radix 10 comvierte el dato a un numero decimal normal
      id_categoria: parseInt(idCategoria, 10), // el radix 10 comvierte el dato a un numero decimal normal
      id_estado: parseInt(idEstado, 10), // el radix 10 comvierte el dato a un numero decimal normal
      contacto,
    };

    try {
      const response = await post("/cargar-jugador", jugadorData); //envio el posta a la ruta y los datos como argumento
        console.log(response);
        
      if (response.ok) {
        alert("jugador agregado con exito");
        setNombre(" ");
        setApellido(" ");
        setEdad(" ");
        setIdCategoria(" ");
        setIdEstado(" ");
        setContacto(" ");
      } else {
        alert(response.message);
      }
    
    } catch (error) {
      console.error("Error al agregar el jugador:", error);
      alert("Hubo un error al agregar el jugador");
    }
  };

  return (
    <div className="bg-green-700 min-h-screen flex  flex-col items-center">
      <Header className="w-full" />
      <h2 className="text-3xl font-bold my-6 text-white">
        Cargar Nuevo Jugador
      </h2>
      <form
        onSubmit={handleSubmit}
        className="  justify-center items-center bg-white shadow-md rounded-lg p-8 w-full max-w-lg border-2 flex-box justify-between items-center border-green-600"
      >
        <StyledInput
          required
          placeholder="Nombre"
          type="text"
          textColor="text-white"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <StyledInput
          placeholder="Apellido"
          type="text"
          textColor="text-white"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <StyledInput
          placeholder="Edad"
          type="number"
          textColor="text-white"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
          className="mb-3"
        />
        <select
          className="w-full mx-auto flex justify-center mb-5 items-cente p-3 max-w-xs border border-green-600 rounded-lg mb-3 text-white"
          value={idCategoria}
          onChange={(e) => setIdCategoria(e.target.value)}
          required
        >
          <option value="">Seleccionar Categoría</option>
          <option value="1">Categoría 1</option>
          <option value="2">Categoría 2</option>
          <option value="3">Categoría 3</option>
        </select>
        <select
          className="w-full mx-auto flex justify-center items-cente p-3 max-w-xs mb-3 border border-green-600 rounded-lg  text-white"
          value={idEstado}
          onChange={(e) => setIdEstado(e.target.value)}
          required
        >
          <option value="">Seleccionar Estado</option>
          <option value="1">Activo</option>
          <option value="2">Inactivo</option>
        </select>

        <StyledInput
          placeholder="Contacto"
          type="text"
          textColor="text-white"
          value={contacto}
          onChange={(e) => setContacto(e.target.value)}
          required
          className="mb-3"
        />
        <button
          className="flex justify-center items-center border rounded-md p-3 text-black bg-green-600 hover:bg-green-400 hover:border-slate-500 hover:text-black mx-auto"
          placeholder="guardar jugador"
          type= "submit"
        >
          cargar jugador
        </button>
      </form>
    </div>
  );
};
export default CargarJugador;
