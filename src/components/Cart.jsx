import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatUSD } from "../helpers/formatUSD";

const Cart = (props) => {
    const { cart } = props;
    const [ active, setActive ] = useState(false);

    useEffect(() => {
        if (cart.length > 0) setActive(true);
    }, [cart]);

    return (
        <div className={`rounded-bl-lg shadow-sm fixed top-0 right-0 p-3 bg-white z-100 ${active ? 'active' : ''}`}>
            <p>{ cart.length > 0 && `${cart.length} Item${cart.length === 1 ? '' : 's'}` }</p>

            {/* {isActive && (
                <ul className="list-disc p-[14px]">
                    {cart.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title} {formatUSD.format(item.price)}
                            </li>
                        )
                    })}
                </ul>
            )} */}
            
            <p><strong>Sub Total: {formatUSD.format(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))}</strong></p>

            <Link className="btn mt-2 inline-block" to="/checkout">Check out</Link>
        </div>
    )
}

export default Cart