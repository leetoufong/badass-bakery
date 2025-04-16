import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import Products from './pages/Products'
import Item from './pages/Item'
import Checkout from './pages/Checkout'
import Layout from './pages/Layout'
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
                    "image": "https://thefirstyearblog.com/wp-content/uploads/2023/05/Hot-Fudge-Sundae-8.jpg",
                    "price": 4.50
                },
                {
                    "id": "C003-B123-449Z",
                    "title": "Steamed Coconut Layered Cake",
                    "descripton": "Coconut milk steamed into creamy goodness. ",
                    "image": "https://www.saveur.com/uploads/2019/02/08/J4362HZVIUZBUTFLJKCGPKLB5U.jpg",
                    "price": 12.00
                },
                {
                    "id": "M35H-ADFQ-LB91",
                    "title": "Sponge Cake",
                    "descripton": "Topped inside and out with strawberries, blue berries, kiwi and tangerine.",
                    "image": "https://www.errenskitchen.com/wp-content/uploads/2018/06/Vanilla-Sponge-Cake-1-recipe-card.jpg",
                    "price": 29.99
                },
                {
                    "id": "0D2D-BAAS-COF3",
                    "title": "Vietnamese Iced Coffee",
                    "descripton": "Able to cool you down and pucker you up all at the same time. Made with condensed milk.",
                    "image": "https://boulderphoco.com/wp-content/uploads/2020/04/Vietnamese-cafe-with-condensed-milk-600x400.jpg",
                    "price": 3.99
                },
                {
                    "id": "BA3Z-39FF-ADG4",
                    "title": "Sesame Balls",
                    "descripton": "Friend to perfection and filled with your choice of soybean paste or taro.",
                    "image": "https://i0.wp.com/vocabularyoffood.com/wp-content/uploads/2023/07/Air-Fried-Sesame-Balls-1.jpg",
                    "price": 10.25
                },
                {
                    "id": "BD0F-MVLW-193I",
                    "title": "Tri-Color Dessert",
                    "descripton": "Friend to perfection and filled with your choice of soybean paste or taro.",
                    "image": "https://i0.wp.com/chawjcreations.com/wp-content/uploads/2019/01/IMG_7531.jpg",
                    "price": 5.15
                }
            ]
        }
    );
    const [ cart, setCart ] = useState([
        {
            "id": "423D-3G2D-DGX12",
            "title": "Hello Sundae",
            "descripton": "The best hello world you'll ever taste",
            "image": "https://thefirstyearblog.com/wp-content/uploads/2023/05/Hot-Fudge-Sundae-8.jpg",
            "price": 4.50
        }
    ]);

    return (
        <Routes>
            <Route path="/" element={ <Layout data={data} cart={cart} /> }>
                <Route index element={ <Products setCart={setCart} data={data} /> } />
                <Route path="/checkout" element={ <Checkout cart={cart} /> } />
                <Route path="/item/:itemId" element={ <Item /> } />
            </Route>
        </Routes>
    )
}

export default App
