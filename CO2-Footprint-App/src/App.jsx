import './App.css'
import { Routes, Route } from 'react-router'
import Navigation from './Home/Navigation'
import Homepage from './Home/Homepage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          {/* <Route path="/kontakt" element={<Kontakt />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
