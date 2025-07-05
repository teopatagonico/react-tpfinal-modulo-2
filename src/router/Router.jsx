import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "/src/components/Header.jsx"
import Home from "/src/components/Home.jsx"
import Producto from "/src/components/Producto.jsx"
function Router() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/producto" element={<Producto />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
