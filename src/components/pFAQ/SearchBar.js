import React, { useState } from 'react';

//Partial Components
import Button from "../pMisc/Button"

const SearchBar = ({applySearch}) => {
    const [input, setInput] = useState("");

    return (
        <div className='faq-search'>
            <input 
                onChange={({target: { value }}) => setInput(value)}
                value={input} 
                placeholder="Busque por termo..." 
                className="faq-input c-black br-low no-outline mar-r-12 pad-l-12" 
                type="text"
            />
            <Button className="search-btn" onClick={() => applySearch(input)} color="blue" icon="search" label="BUSCAR"/>
        </div>
    )
}

export default SearchBar;