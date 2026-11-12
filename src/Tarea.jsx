import { useState } from "react";

export default function Tarea(props) {
  return (
    <li
      className="lista"
      draggable={true}
      onDragStart={() => {
        props.setArrastrada(props.tarea.id);
        console.log("Arrastrando", props.tarea.id);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        console.log("Origen", props.tareaArrastrada);
        console.log("Soltada sobre:", props.tarea.id);
        props.reordenarTareas(props.tarea.id);
      }}
      onDragEnd={() => props.setArrastrada(null)}
    >
      <span className={props.tarea.completada ? "completada" : "pendiente"}>
        {props.tarea.texto}
      </span>
      <button onClick={() => props.borrarTarea(props.tarea.id)}>Borrar</button>
      <button onClick={() => props.completarTarea(props.tarea.id)}>
        {props.tarea.completada ? "Desmarcar" : "Completar"}
      </button>
    </li>
  );
}
