import Tarea from "./Tarea.jsx"
export default function ListaTareas(props) {
    let tareasVisibles = props.tareas

    if (props.filtro === "pendientes") {
        tareasVisibles = tareasVisibles.filter((tarea) => 
            { return tarea.completada === false })

    }
    else if (props.filtro === "completadas") {
        tareasVisibles = tareasVisibles.filter((tarea) => 
            { return tarea.completada === true })

    }
    return (
        <>
            <p>Tareas con el filtro aplicado</p>
            <ul className="ul">

                {tareasVisibles.map((tarea) => <Tarea
                    tarea={tarea}
                    key={tarea.id}
                    borrarTarea={props.borrarTarea}
                    completarTarea={props.completarTarea} />)}

            </ul>


        </>
    )


}