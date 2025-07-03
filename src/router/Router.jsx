import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "/src/components/Header/Header.jsx"
import Home from "/src/components/Home/Home.jsx"
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
