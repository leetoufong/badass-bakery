import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatUSD } from "../libs/utils";

const Cart = (props) => {
    const { cart } = props;
    const [ drawerOpen, setDrawerOpen ] = useState(false);

    return (
        <div className={`rounded-bl-lg shadow-sm fixed top-0 right-0 p-3 bg-white z-100 ${drawerOpen ? 'active' : ''}`}>
            {drawerOpen && (
                <ol className="list-decimal pl-5">
                    {cart.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title} {formatUSD.format(item.price)} <button>X</button>
                            </li>
                        )
                    })}
                </ol>
            )}
            
            <p><strong>Sub Total: {formatUSD.format(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))}</strong></p>

            <button className="btn text-center w-full mt-2 block" onClick={() => setDrawerOpen(prev => !prev)}>View Cart { cart.length > 0 && <small>({cart.length} Item{cart.length === 1 ? '' : 's'})</small> }</button>

            <Link className="btn text-center w-full mt-2 block" to="/checkout">Check out</Link>
        </div>
    )
}

export default Cart