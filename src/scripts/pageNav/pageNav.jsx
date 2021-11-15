import React, { useState } from 'react'

export default function PageNav () {
    const markers = getMarkers()
    console.log(markers)

    return (
        <ul>
            { markers.map((marker, i) => (
                <li key={ i }>
                    <a onClick={ () => clickMarker(marker.el) }>{ marker.header.textContent }</a>
                </li>
            )) }
        </ul>
    )
}

function clickMarker (el) {
    window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
    })
}

function getMarkers (root = document.body) {
    const els = root.querySelectorAll('main, nav, article, section')
    return Array.from(els).map(el => ({
        el,
        header: el.querySelector('h1,h2,h3,h4,h5'),
        parentCount: getParentCount(el)
    })).filter(marker => !!marker.header)
    
}

function getParentCount (el, count = 0) {
    if (el === document.body) {
        return count
    } else {
        return getParentCount(el.parentElement, count + 1)
    }
}