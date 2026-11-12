import { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas.jsx";
import Formulario from "./Formulario.jsx";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("tareas"))
      ? JSON.parse(localStorage.getItem("tareas"))
      : [],
  );
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [filtro, setFiltro] = useState("todas");
  const [tareaArrastrada, setArrastrada] = useState(null);
  const tareasPendientes = tareas.filter((tarea) => {
    return tarea.completada === false;
  }).length;
  function borrarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }
  function completarTarea(id) {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          const tareaActualizada = {
            ...tarea,
            completada: !tarea.completada,
          };
          return tareaActualizada;
        }
        return tarea;
      }),
    );
  }

  function agregarTarea(e) {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setTareas([
        ...tareas,
        {
          id: crypto.randomUUID(),
          texto: nuevaTarea.trim(),
          completada: false,
        },
      ]);
      setNuevaTarea("");
    }
  }
  function reordenarTareas(idDestino) {
    const posicionOrigen = tareas.findIndex(
      (tarea) => tarea.id === tareaArrastrada,
    );
    const posicionDestino = tareas.findIndex((tarea) => tarea.id === idDestino);
    if (
      posicionOrigen === -1 ||
      posicionDestino === -1 ||
      posicionOrigen === posicionDestino
    ) {
      return;
    }
    const nuevasTareas = [...tareas];
    const [tareaExtraida] = nuevasTareas.splice(posicionOrigen, 1);
    nuevasTareas.splice(posicionDestino, 0, tareaExtraida);
    setTareas(nuevasTareas);
  }

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
  return (
    // <main className='app'>

    // </main>
    <>
      <div className="titulo">
        <h1>Pendientes {tareasPendientes}</h1>
      </div>
      <div className="cuadroFormulario">
        <p>Mi lista de tareas</p>
        <Formulario
          nuevaTarea={nuevaTarea}
          setNuevaTarea={setNuevaTarea}
          agregarTarea={agregarTarea}
        />

        <div className="caja-botones">
          <button onClick={() => setFiltro("todas")}>Todas</button>
          <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
          <button onClick={() => setFiltro("completadas")}>Completadas</button>
        </div>
      </div>
      <ListaTareas
        tareas={tareas}
        borrarTarea={borrarTarea}
        completarTarea={completarTarea}
        filtro={filtro}
        tareaArrastrada={tareaArrastrada}
        setArrastrada={setArrastrada}
        reordenarTareas={reordenarTareas}
      />
    </>
  );
}

export default App;
