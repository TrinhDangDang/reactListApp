import React from 'react';
import {useRef} from 'react';
import {FaPlus} from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={()=> inputRef.current.focus()} //inputRef.current will point to the input field because ref={inputRef} is one of its property, when the button is cliked, the input field is focused.
            >
                < FaPlus />
            </button>
        </form>
    )
}

export default AddItem