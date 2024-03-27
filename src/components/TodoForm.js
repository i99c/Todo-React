import React, { useState, useRef, useEffect } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.text : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (input.trim()) {
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            });

            setInput('');
        }
    };

    return (
        <form className='todo-form' onSubmit={ handleSubmit }>
            { props.edit ? (
                <>
                    <input type='text' placeholder='Güncelle' value={ input } name='text' className='todo-input' onChange={ handleChange } ref={ inputRef } />
                    <button className='todo-button'>Görevi Güncelle </button> { }
                </>
            ) : (
                <>
                    <input type='text' placeholder='Yeni görev ekle' value={ input } name='text' className='todo-input' onChange={ handleChange } ref={ inputRef } />
                    <button className='todo-button'>Görevi Ekle </button> { }
                </>
            ) }
        </form>
    );
}

export default TodoForm;
