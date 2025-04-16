import { formatUSD } from "../helpers/formatUSD";

const Checkout = (props) => {
    const { cart } = props;
    
    return (
        <ul>
            {cart.map((item, index) => {
                return (
                    <li key={index}>
                        {item.title} {formatUSD.format(item.price)}
                    </li>
                )
            })}
        </ul>
    )
}

export default Checkout;
