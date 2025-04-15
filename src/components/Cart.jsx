import { useState } from "react";

const Cart = (props) => {
    const { cart } = props;
    const [ isActive, setIsActive ] = useState(false);

    const formatUSDHandler = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    return (
        <div className="fixed top-0 right-0 p-4 bg-white">
            <p>{ cart.length > 0 && `${cart.length} Item${cart.length === 1 ? '' : 's'}` }</p>

            {isActive && (
                <ul className="list-disc p-[14px]">
                    {cart.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title} {formatUSDHandler.format(item.price)}
                            </li>
                        )
                    })}
                </ul>
            )}
            
            <p><strong>Sub Total: {formatUSDHandler.format(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))}</strong></p>

            {isActive && (
                <button className="btn mt-4">Check out</button>
            )}
        </div>
    )
}

export default Cart