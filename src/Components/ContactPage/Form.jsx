import React, { useRef, useState } from "react";
import { db } from "../Firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const Form = () => {
  const formRef = useRef();
  const [datos, setDatos] = useState({});
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const { nombre, apellido, email, mensaje } = datos;

  const handleChange = (e) => {
    e.preventDefault();
    //TOMAMOS LOS DATOS DEL FORM CUANDO CAMBIA
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //VERIFICAMOS QUE ESTEN TOOOODOS LOS DATOS Y GUARDAMOS LOS DATOS DEL FORM AL DARLE SUBMIT
    if (!nombre || !apellido || !email || !mensaje) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);

    } else {
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 3000);
      
      const mensajeCollection = collection(db, "mensaje");

      const newMensaje = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        mensaje: mensaje,
        date: new Date(),
      };
      //PASAMOS A LA DB EL MENSAJE CONSTRUIDO EN EL FORM
      await addDoc(mensajeCollection, newMensaje);
      setDatos(
        {nombre: "", 
        apellido: "", 
        email: "", 
        mensaje: ""}
        );
        console.log('llegamos aqui');
    }
  };
  return(
    <form ref={formRef} onSubmit={handleSubmit} action="">
      <input
        onChange={handleChange}
        name="nombre"
        type="text"
        placeholder="Nombre"
        value={nombre}
      />
      <input
        onChange={handleChange}
        name="apellido"
        type="text"
        placeholder="Apellido"
        value={apellido}
      />
      <input
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
        value={email}
      />
      <textarea
        onChange={handleChange}
        name="mensaje"
        id="mensaje"
        placeholder="Mensaje"
        value={mensaje}
      ></textarea>
      <button type="submit">Enviar</button>
      {error && (
        <div className="animate__animated animate__zoomInLeft error">
          Todos los campos son obligatorios
        </div>
      )}
      {sucess && (
        <div className="animate__animated animate__zoomInLeft sucess">
          Mensaje enviado correctamente
        </div>
      )}
    </form>
  );
};
