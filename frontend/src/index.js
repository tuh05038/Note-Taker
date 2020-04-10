import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoteForm from './createNote';

ReactDOM.render(
        
        <React.StrictMode>
            <App />
            <NoteForm/>
        </React.StrictMode>,
        document.getElementById("root")
        );

 