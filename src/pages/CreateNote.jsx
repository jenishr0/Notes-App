import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { v4 as uuid } from 'uuid';
import useCreateDate from '../components/useCreateDate';

const CreateNote = ({ setNotes }) => {
    const [title, setTitle] = useState('');
    const [noteDetails, setNoteDetails] = useState('');
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && noteDetails) {
            const notes = { id: uuid(), title, details: noteDetails, date };

            // add this note to the notes array
            setNotes(prevNotes => [notes, ...prevNotes]);

            // redirect to home page
            navigate('/');
        }
    };

    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleSubmit}>Save</button>
            </header>
            <form className="create-note__form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                <textarea rows="28" placeholder="Note Details..." value={noteDetails} onChange={(e) => setNoteDetails(e.target.value)} />
            </form>
        </section>
    );
};

export default CreateNote;
