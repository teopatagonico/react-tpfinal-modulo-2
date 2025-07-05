import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "/src/styles/Home.css"

function Home() {
    const [productos, setProductos] = useState([])
    const fetchProductos = async () => {
        const respuesta = await fetch("https://fakestoreapi.com/products")
        const data = await respuesta.json()
        setProductos(data)
    }
    useEffect(() => {fetchProductos()}, [])
    return (
        <>
            <div className="productosContainer">
            {
                productos.map((producto) => {
                    console.log(producto)
                    return(
                        <div className="producto">
                            <img src={producto.image} alt={"Imagen de " + producto.title}/>
                            <h2>{producto.title}</h2>
                            <p id="precio">USD {producto.price}</p>
                            <Link to={`/producto/${producto.title}`}><button>Ver más</button></Link>
                        </div>
                    )
                }
                )
            }
            </div>
        </>
    )
}

export default Home