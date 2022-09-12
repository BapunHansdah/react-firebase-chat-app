import React from 'react'
import AppList from './components/_appList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
require("dotenv").config()

import './styles.css'

function App() {


  return (

    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppList />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

