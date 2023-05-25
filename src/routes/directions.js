import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../views/homepage/index'
import React from 'react'

function Directions() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Directions