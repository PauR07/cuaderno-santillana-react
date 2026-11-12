export default function Formulario(props) {
    return (
        <form onSubmit={props.agregarTarea}>
            <input value={props.nuevaTarea} onChange={(event) => props.setNuevaTarea(event.target.value)} placeholder='Introduce tu tarea AQUÍ'></input>
            <button type='submit'>Añadir tarea</button>
        </form>
    )
}