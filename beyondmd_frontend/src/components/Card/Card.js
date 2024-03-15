import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PokedexData from '../DataFetch/DataFetch';

export default function MediaCard() {
    const { name, imgURL } = PokedexData();

    // Creates a MediaCard MUI to display the Pokemon's name and image.
    // See: DataFetch.js
  return (
    <Card sx={{ 
        maxWidth: 260,
        minHeight: 320,
        display: 'block',
        borderRadius: 3,
        margin: 'auto',
          }}>
        <CardContent>
            <Typography variant='h4' sx={{
                textAlign:'center',
                textTransform: 'capitalize',
            }}>
                {name}
            </Typography>
        </CardContent>
      <CardMedia
        sx={{ height: 150,
            width: 150,
            objectFit: 'cover',
            margin: 'auto',
            marginTop: 5,
         }}
        image={imgURL}
      />
    </Card>
  );
}