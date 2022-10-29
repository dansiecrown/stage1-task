import React from 'react'

export default function Anchor({ data }) {

    const anchor = data.map((item) => {
        return <a href={item.url} target="_blank" key={item.id} rel="noreferrer" className="anchor" title={item.title}>{item.name}</a>
    }
    )
    return (
        <div className="container">
            {anchor}
        </div>
    )
}
