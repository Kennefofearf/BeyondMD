import React, { useState, useEffect } from 'react';
import PostPokemon from '../PostPokemon/PostPokemon';
import DeleteOldest from '../DeleteOldest/DeleteOldest';

// Fetches random Pokemon data from the django API on the backend.
// See: hello_beyondmd\app\views.py for the fetch 

const PokedexData = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Fetched from django backend. See: hello_beyondmd\app\urls.py
        fetch('http://127.0.0.1:8000/app')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Assigns variables for name, ID, and image using the data acquired

    const iD = data.id;
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${iD}.png`
    const name = data.name;
    PostPokemon(iD, name);
    {console.log(data)}
    DeleteOldest()
    return {name, imgURL};

};

export default PokedexData;
