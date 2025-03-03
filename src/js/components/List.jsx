import React, { useState } from "react";

export function List() {
    // Hook de Array de la lista de tareas
    const [ notes, setNotes] = useState([]);

    // Hook para actualizar los datos
    const [ noteValue, setNoteValue] = useState('');

    // Variable del total de notas
    let totalNotes = notes.length;

    // Evento de escucha de los valores del input
    const changeValue = (event) => {
        setNoteValue(event.target.value);
    }

    // Escucha de la tecla Enter
    const keyEnter = (event) => {
        if (event.key === 'Enter') {
            console.log("Enter presionado");
            setNotes( prevNotes => [...prevNotes, noteValue]);
            setNoteValue('');
            console.log(notes);
        }
    }

    // Eliminar nota
    const deleteNote = (index) => {
        setNotes(prevNotes => prevNotes.filter((_, indice) => indice !== index));
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100 w-50">
            <input type="text" className="form-control" value={noteValue} onChange={changeValue} onKeyDown={keyEnter} aria-describedby="inputLabel"></input>
            <div id="inputLabel" className="form-text">Write your notes here.</div>
            
            {notes.map((note, index) => (
                <div key={index} className="d-flex w-100 border justify-content-between">
                    <p className="my-auto p-2">{note}</p>
                    <button className="btn" onClick={() => deleteNote(index)}>X</button>
                </div>
            ))}

            <p>{totalNotes} items left.</p>
            
        </div>
    )
}