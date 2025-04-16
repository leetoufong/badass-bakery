import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { formatUSD } from "../helpers/formatUSD";

const Item = (props) => {
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
        <div>
            <img src={currentItem?.image} />
            <h2>{currentItem?.title}</h2>
            <p>{formatUSD.format(currentItem?.price)}</p>
            <p>{currentItem?.description}</p>
            <button
                className="btn mt-4"
                onClick={() => {
                    setCart(prev => [...prev, currentItem]);
                }}
            >
                +Add <span className="sr-only">to cart</span>
            </button>
        </div>
    )
}

export default Item;
