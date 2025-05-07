import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { formatUSD } from "../libs/utils";

const ItemDetail = (props) => {
    const { data, setCart } = props;
    const [ currentItem, setCurrentItem ] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (data) {
            setCurrentItem(
                data.products.filter(item => item.id === location.search.split('?id=')[1])[0]
            )
        }
    }, [data]);

    return (
        <>
            <Link className="flex items-center hover:underline mb-4" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#201f21" viewBox="0 -960 960 960"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            Go back</Link>
        
            <figure className="flex">
                <img className="mr-8 rounded-xl" src={currentItem?.image} />
                <figcaption>
                    <h2 className="mb-4 font-bold text-4xl">{currentItem?.title}</h2>
                    <p className="mb-4">{formatUSD.format(currentItem?.price)}</p>
                    <p className="mb-4">{currentItem?.description}</p>
                    <button
                        className="btn mt-4"
                        onClick={() => {
                            setCart(prev => [...prev, currentItem]);
                        }}
                    >
                        + Add <span className="sr-only">to cart</span>
                    </button>
                </figcaption>
            </figure>
        </>
    )
}

export default ItemDetail;
