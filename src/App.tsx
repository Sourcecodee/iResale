import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ProductProvider } from './context/ProductContext'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  )
}

export default App
