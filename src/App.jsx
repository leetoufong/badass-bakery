import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import Products from './pages/Products';
import ItemDetail from './pages/ItemDetail';
import Checkout from './pages/Checkout';
import Layout from './pages/Layout';
import './App.css'

const App = () => {
    const [ data, setData ] = useState(null);
    const [ cart, setCart ] = useState([
        {
            "id": "423D-3G2D-DGX12",
            "title": "Hello Sundae World",
            "description": "The Hello World Sundae is a fully stacked, developer-approved dessert loaded with vanilla \"root\" ice cream, hot \"Java\" fudge, byte-sized brownies, and syntax-sprinkled toppings — the perfect first commit for your sweet tooth.",
            "image": "https://thefirstyearblog.com/wp-content/uploads/2023/05/Hot-Fudge-Sundae-8.jpg",
            "price": 4.50
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetch('./store.json');
                const response = await request.json();
                
                setData(response);
            }
            catch(e) {
                console.error(e)
            }
            finally {
                
            }
        };

        fetchData();
    }, []);

    return (
        <Routes>
            <Route path="/" element={ <Layout data={data} cart={cart} /> }>
                <Route index element={ <Products setCart={setCart} data={data} /> } />
                <Route path="/checkout" element={ <Checkout cart={cart} /> } />
                <Route path="/item" element={ <ItemDetail data={data} setCart={setCart} /> } />
            </Route>
        </Routes>
    )
}

export default App
