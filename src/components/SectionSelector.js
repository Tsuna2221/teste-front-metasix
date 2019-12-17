import React from 'react';

//Partial Components
import SelectionItem from './pSection/SelectionItem'

const SSelector = ({location: { pathname }}) => {
    let highlightSelected = (id) => pathname.includes(id)

    return (
        <div className="d-flex mar-v-40">
            <SelectionItem selected={highlightSelected} label="Home" id="home"/>
            <SelectionItem selected={highlightSelected} label="FAQ" id="faq"/>
            <SelectionItem selected={highlightSelected} label="Locais" id="locais"/>
            <SelectionItem selected={highlightSelected} label="Categorias" id="categorias"/>
        </div>
    )
}

export default SSelector;