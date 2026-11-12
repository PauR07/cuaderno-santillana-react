export default function Tarea(props) {
    return (
        <li className="lista">
            <span className={props.tarea.completada ? "completada" : "pendiente"}>{props.tarea.texto}</span>
            <button onClick={() => props.borrarTarea(props.tarea.id)}>Borrar</button>
            <button onClick={() => props.completarTarea(props.tarea.id)}>{props.tarea.completada ? "Desmarcar" : "Completar"}</button>
        </li>
    )


}