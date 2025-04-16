import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import Products from './pages/Products';
import Item from './pages/Item';
import Checkout from './pages/Checkout';
import Layout from './pages/Layout';
import './App.css'

const App = () => {
    const [ data, setData ] = useState(null);
    const [ cart, setCart ] = useState([
        {
            "id": "423D-3G2D-DGX12",
            "title": "Hello Sundae World",
            "description": "The best hello world you'll ever taste",
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
                <Route path="/item" element={ <Item data={data} setCart={setCart} /> } />
            </Route>
        </Routes>
    )
}

export default App
