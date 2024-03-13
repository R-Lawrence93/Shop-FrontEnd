import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Store } from "./pages/store"
import { About } from "./pages/about"
import { Navbar } from './components/navbar'
import "./style.css"
import { ShoppingCartProvider } from "./context/Shoppingcontext"

function App() {
  return <>
  <ShoppingCartProvider>
  <div className="mb-4">
    <Navbar />
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/store" element={ <Store /> } />
      <Route path="/About" element={ <About />} />
    </Routes>
  </div>
  </ShoppingCartProvider>
  </>
}

export default App
