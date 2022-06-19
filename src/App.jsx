import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import DragAndDrop from './pages/DragAndDrop'
import Information from './pages/Information'
import Layout from './layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Layout />}>
          <Route path="/drag-and-drop" element={<DragAndDrop />} />
          <Route path="/info" element={<Information />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
