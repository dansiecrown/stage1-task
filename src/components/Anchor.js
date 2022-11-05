import React from 'react';
import { Link } from 'react-router-dom';

export default function Anchor({ data }) {

    const anchor = data.map((item) => {
        return <a href={item.url} target="_blank" key={item.id} id={item.id} rel="noreferrer" className="anchor" title={item.title}>{item.name}</a>
    }
    )
    return (
        <div className="container">
            {anchor}
            <Link to={'/contact'} className='anchor' id='contact'>Contact</Link>
        </div>
    )
}
