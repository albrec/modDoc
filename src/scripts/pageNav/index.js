import React from 'react'
import ReactDOM from 'react-dom'
import PageNav from './pageNav'

const header = document.querySelector('body > header')
const nav = document.createElement('nav')
nav.className = 'page-nav'
header.after(nav)

ReactDOM.render(<PageNav />, nav)