import React, {useState, useEffect} from "react";
import axios from "axios"
import { Card, CardContent, Typography } from "@mui/material";

// Calls the django getPokemon function on the backend using an API
// See: hello_beyondmd\app\views.py
const GetPokemon = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {

    // Fetched from django backend. See: hello_beyondmd\app\urls.py
        axios.get('http://127.0.0.1:8000/getPokemon/')
            .then(response => {
                setArray(response.data);
            })
            .catch(error => {
                console.error('Error fetching pokemon:', error);
            });
    }, []);

    // Displays the pokemon from the API on a MediaCard MUI

    return (
        <div>
            <Card sx={{ 
        maxWidth: 200,
        minHeight: 320,
        display: 'flex',
        borderRadius: 3,
        marginTop: -56,
        marginLeft: 15,
        }}>
                <CardContent>
            <h1 className="cardheader">Party</h1>
                    <Typography sx={{
                textAlign:'center',
                textTransform: 'capitalize',
            }}>
            <ul className="list">
                {array.map(pokemon => (
                    <li key={pokemon.no}>{pokemon.no}.  {pokemon.name}</li>
                ))}
            </ul>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default GetPokemon;