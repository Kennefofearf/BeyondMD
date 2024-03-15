import React from "react";
import axios from "axios";
import './DeletePokeButton.css';

// Calls the django deletePokemon function on the backend using an API
// See: hello_beyondmd\app\views.py

const DeletePokeButton = () => {
    const deleteData = () => {

    // Fetched from django backend. See: hello_beyondmd\app\urls.py
        axios.delete('http://127.0.0.1:8000/deletePokemon/')
        .catch(error => {
            console.error('Error deleting all pokemon:', error);
        });
        window.location.reload()
    }
    return (
        <button className='delete' onClick={deleteData}>Delete All Pokemon</button>
    )
}

export default DeletePokeButton;