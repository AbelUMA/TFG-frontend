import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Welcome from './pages/Welcome'
import DragAndDrop from './pages/DragAndDrop'
import Information from './pages/Information'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Algorithm from './pages/Algorithm/Algorithm'
import BasicsOfProgramming from './pages/BasicsOfProgramming'
import Quiz from './pages/Quiz'
import AlgorithmExamples from './pages/Algorithm/AlgorithmExamples'
import AlgorithmYourself from './pages/Algorithm/AlgorithmYourself'
import Exercises from './pages/Algorithm/Exercises'
import Programming from './pages/Programming'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout presentation={true} />}>
          <Route path="/presentation" element={<AboutMe />} />
        </Route>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route
            path="/basics-of-programming"
            element={<BasicsOfProgramming />}
          />

          <Route path="/drag-and-drop" element={<DragAndDrop />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/algorithm" element={<Algorithm />} />
          <Route path="/algorithm/examples" element={<AlgorithmExamples />} />
          <Route path="/algorithm/yourself" element={<AlgorithmYourself />} />
          <Route path="/algorithm/yourself/:id" element={<Exercises />} />
          <Route path="/info" element={<Information />} />
          <Route path="/programming" element={<Programming />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
