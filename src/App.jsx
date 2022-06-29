import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import DragAndDrop from './pages/DragAndDrop'
import Information from './pages/Information'
import Home from './pages/Home'
import Layout from './layout/Layout'
import BasicsOfProgramming from './pages/BasicsOfProgramming'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="/basics-of-programming"
            element={<BasicsOfProgramming />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/drag-and-drop" element={<DragAndDrop />} />
          <Route path="/info" element={<Information />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
