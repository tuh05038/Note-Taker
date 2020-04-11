/*
    Holds all of the notes in the left bar that were created and
    allows for a note to be selected to be viewed
*/


import React, {useContext} from 'react';
import Note from '../NotesEditor/Note';
import './NotesContainer.css';
import { NoteContext } from '../../contexts/NoteContext';

function NotesContainer({notes, updateNoteToDisplay}) {
    const MAX_CONTENT_LENGTH = 80;
    const [note, setNote, filterNotes, filterResults] = useContext(NoteContext);

    const handleClick = (n) => {
        setNote(n);
    };

    const trimContent = (content) => {
        let result = "";
        let trimmed = false;

        // add dots since the content of the note was trimmed
        if (content.length > MAX_CONTENT_LENGTH) {
            trimmed = true;
            for (let i = 0; i < MAX_CONTENT_LENGTH-3; i++) {
                result += content.charAt(i);
            }
            result += "...";
            console.log(result);
        }

        return trimmed? result: content;
    };

    if (filterResults.length > 0) {
        return(
            <div className="notes-container" >
                {filterResults.map((data, index) => {
                    if (!data.contentTrimmed)
                        data.contentTrimmed = trimContent(data.content);
                    
                    return <Note key={index} index={index} note={data} updateIndex={() => handleClick({id: data.id, title: data.title, content: data.content, tags: data.tags})} />;
                })}
            </div>
        );
    } else {
        return(
            <div className="notes-container" >
                <p>No notes could be found</p>
            </div>
        );
    }
}

export default NotesContainer;