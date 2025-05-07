import { formatUSD } from "../libs/utils";

const Checkout = (props) => {
    const { cart } = props;
    
    return (
        <>
            <ul>
                {cart.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.title} {formatUSD.format(item.price)}
                        </li>
                    )
                })}
            </ul>

            {formatUSD.format(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))}
        </>
    )
}

export default Checkout;
