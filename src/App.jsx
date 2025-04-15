import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Layout from './pages/Layout'
import useFetchData from './hooks/useFetchData'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [ data, setData ] = useState(
        {
            "title": "Badass Bakery",
            "description": "A badass bakery you'll love to try",
            "products": [
                {
                    "id": "423D-3G2D-DGX12",
                    "title": "Hello Sundae",
                    "descripton": "The best hello world you'll ever taste",
                    "image": "https://fpoimg.com/600x400",
                    "price": 4.50
                },
                {
                    "id": "M35H-ADFQ-LB91",
                    "title": "Sponge Cake",
                    "descripton": "Topped inside and out with strawberries, blue berries, kiwi and tangerine.",
                    "image": "https://fpoimg.com/600x400",
                    "price": 29.99
                },
                {
                    "id": "C003-B123-449Z",
                    "title": "Steamed Coconut Layered Cake",
                    "descripton": "Coconut milk steamed into creamy goodness. ",
                    "image": "https://fpoimg.com/600x400",
                    "price": 12.00
                },
                {
                    "id": "0D2D-BAAS-COF3",
                    "title": "Vietnamese Iced Coffee",
                    "descripton": "Able to cool you down and pucker you up all at the same time. Made with condensed milk.",
                    "image": "https://fpoimg.com/600x400",
                    "price": 3.99
                },
                {
                    "id": "BA3Z-39FF-ADG4",
                    "title": "Sesame Balls",
                    "descripton": "Friend to perfection and filled with your choice of soybean paste or taro.",
                    "image": "https://fpoimg.com/600x400",
                    "price": 10.25
                }
            ]
        }
    );
    const [ cart, setCart ] = useState([
        {
            "id": "423D-3G2D-DGX12",
            "title": "Hello Sundae",
            "descripton": "The best hello world you'll ever taste",
            "image": "https://fpoimg.com/600x400",
            "price": 4.50
        }
    ]);

    return (
        <Routes>
            <Route path="/" element={ <Layout data={data} cart={cart} /> }>
                <Route index element={ <Products setCart={setCart} data={data} /> } />
                <Route path="checkout" element={ <Checkout /> } />
            </Route>
        </Routes>
    )
}

export default App
