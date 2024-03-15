import React from "react";

// POSTs the displayed Pokemon's name and iD in the database after the next refresh

export default function PostPokemon(iD, name) {

const pokemon = {name: name, no: iD}

fetch('http://127.0.0.1:8000/postPokemon/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(pokemon),
})
.catch(error => {
    console.error('Error posting pokemon:', error);
});

    console.log(pokemon)
    return {name, iD}
}
