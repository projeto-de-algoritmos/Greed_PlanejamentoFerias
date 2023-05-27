import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../views/homepage/index'
import Motivation from '../views/secondePage/index'
import Schedule from '../views/thirdPage/index'
import CreateSchedule from '../views/CreateSchedule/index'

import React from 'react'

function Directions() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Motivation" element={<Motivation />} />
          <Route path="/create-schedule" element={<CreateSchedule />} />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Directions