import React, { useState, useEffect } from "react";

export function List() {
    // Hook de Array de la lista de tareas
    const [ notes, setNotes] = useState([]);

    // Hook para actualizar los datos
    const [ noteValue, setNoteValue] = useState('');

    // Variable del total de notas
    const [textTotalNotes, setTextTotalNotes] = useState("");

    useEffect(() => {
        if (notes.length === 0) {
          setTextTotalNotes("No tasks, add a task.");
        } else if (notes.length === 1) {
          setTextTotalNotes(`${notes.length} item left.`);
        } else {
          setTextTotalNotes(`${notes.length} items left.`);
        }
      }, [notes]);
    

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
            <div id="inputLabel" className="form-text mb-5">Write your notes here.</div>
            
            {notes.map((note, index) => (
                <div key={index} className="d-flex w-100 border justify-content-between">
                    <p className="my-auto p-2">{note}</p>
                    <button className="btn" onClick={() => deleteNote(index)}>X</button>
                </div>
            ))}

            <p>{textTotalNotes}</p>
            
        </div>
    )
}