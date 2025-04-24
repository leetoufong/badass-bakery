import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import Products from './pages/Products';
import ItemDetail from './pages/ItemDetail';
import Checkout from './pages/Checkout';
import Layout from './pages/Layout';
import './App.css'

const App = () => {
    const [ data, setData ] = useState(null);
    const [ cart, setCart ] = useState([]);

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
                // Do something final like turning off loader
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
