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
    const [ data ] = useState(
        {
            "title": "Badass Bakery",
            "description": "A badass bakery you'll love to try",
            "products": [
                {
                    "id": "423D-3G2D-DGX12",
                    "title": "Hello Sundae World",
                    "description": "The most badass Hello World you'll ever taste.",
                    "image": "https://thefirstyearblog.com/wp-content/uploads/2023/05/Hot-Fudge-Sundae-8.jpg",
                    "price": 4.50
                },
                {
                    "id": "C003-B123-449Z",
                    "title": "Steamed Coconut Layered Cake",
                    "description": "Soft, chewy, and packed with bold coconut flavor — this Steamed Coconut Layered Cake is a legendary treat that’s all about rich, creamy layers. Share it, or keep it all to yourself — your call!",
                    "image": "https://www.saveur.com/uploads/2019/02/08/J4362HZVIUZBUTFLJKCGPKLB5U.jpg",
                    "price": 12.00
                },
                {
                    "id": "M35H-ADFQ-LB91",
                    "title": "Sponge Cake",
                    "description": "Light, airy, and unapologetically loaded — this melt-in-your-mouth sponge cake stacks high with juicy strawberries, kiwi, and a wild mix of fresh berries. The ultimate fruity flex.",
                    "image": "https://www.errenskitchen.com/wp-content/uploads/2018/06/Vanilla-Sponge-Cake-1-recipe-card.jpg",
                    "price": 29.99
                },
                {
                    "id": "0D2D-BAAS-COF3",
                    "title": "Vietnamese Iced Coffee",
                    "description": "Bold, smooth, and dangerously sweet — this iced Vietnamese brew hits hard with strong coffee and creamy condensed milk. It'll cool you down, wake you the hell up and make you happy too, all in one sip.",
                    "image": "https://boulderphoco.com/wp-content/uploads/2020/04/Vietnamese-cafe-with-condensed-milk-600x400.jpg",
                    "price": 3.99
                },
                {
                    "id": "BA3Z-39FF-ADG4",
                    "title": "Sesame Balls",
                    "description": "Crispy on the outside, chewy at the core — these golden sesame balls pack a punch of sweet, gooey goodness in every bite.",
                    "image": "https://i0.wp.com/vocabularyoffood.com/wp-content/uploads/2023/07/Air-Fried-Sesame-Balls-1.jpg",
                    "price": 10.25
                },
                {
                    "id": "BD0F-MVLW-193I",
                    "title": "Tri-Color Dessert",
                    "description": "A harmonious trio of layers, where bold flavors and silky textures converge — a tiny, edible universe unfolding in every colorful bite.",
                    "image": "https://i0.wp.com/chawjcreations.com/wp-content/uploads/2019/01/IMG_7531.jpg",
                    "price": 5.15
                }
            ]
        }
    );
    const [ cart, setCart ] = useState([
        {
            "id": "423D-3G2D-DGX12",
            "title": "Hello Sundae World",
            "description": "The best hello world you'll ever taste",
            "image": "https://thefirstyearblog.com/wp-content/uploads/2023/05/Hot-Fudge-Sundae-8.jpg",
            "price": 4.50
        }
    ]);

    return (
        <Routes>
            <Route path="/" element={ <Layout data={data} cart={cart} /> }>
                <Route index element={ <Products setCart={setCart} data={data} /> } />
                <Route path="/checkout" element={ <Checkout cart={cart} /> } />
                <Route path="/item" element={ <Item data={data} /> } />
            </Route>
        </Routes>
    )
}

export default App
