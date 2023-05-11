import React, { useRef, useState } from "react";
import { db } from "../Firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const Form = () => {
  const formRef = useRef();
  const [datos, setDatos] = useState({});
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);


  const handleChange = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!datos.nombre || !datos.apellido || !datos.email || !datos.mensaje) {
      setError(true)
      
      setTimeout(() => {
        setError(false)

      }, 3000);
    } else{
      setSucess(true)
      setTimeout(() => {
        setSucess(false)
      }, 3000);
      const mensaje = collection(db, "mensaje");
      
      const newMensaje = {
        nombre: datos.nombre,
        apellido: datos.apellido,
        email: datos.email,
        mensaje: datos.mensaje,
        date: new Date(),
      };
      await addDoc(mensaje, newMensaje);
      setDatos({ nombre: "", apellido: "", email: "", mensaje: "" });
    }
   

  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} action="">
      <input
        onChange={handleChange}
        name="nombre"
        type="text"
        placeholder="Nombre"
        value={datos.nombre}
      />
      <input
        onChange={handleChange}
        name="apellido"
        type="text"
        placeholder="Apellido"
        value={datos.apellido}
      />
      <input
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
        value={datos.email}
      />
      <textarea
        onChange={handleChange}
        name="mensaje"
        id="mensaje"
        placeholder="Mensaje"
        value={datos.mensaje}
      ></textarea>
      <button type="submit">Enviar</button>
      {error && <div className='animate__animated animate__zoomInLeft error'>Todos los campos son obligatorios</div>}
      {sucess && <div className="animate__animated animate__zoomInLeft sucess">Mensaje enviado correctamente</div>}
    </form>
  );
};
