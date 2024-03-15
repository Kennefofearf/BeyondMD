import React from "react";
import axios from "axios";

// Calls the django deleteOldest function on the backend using an API
// See: hello_beyondmd\app\views.py

const DeleteOldest = () => {

    // Fetched from django backend. See: hello_beyondmd\app\urls.py
    axios.delete('http://127.0.0.1:8000/deleteOldest/')
    .catch(error => {
        console.error('Error deleting oldest pokemon:', error);
    });
}

export default DeleteOldest;