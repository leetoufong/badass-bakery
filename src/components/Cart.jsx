const Cart = (props) => {
    const { cart } = props;

    const formatUSDHandler = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    return (
        <div className="fixed top-0 right-0 p-2 bg-white">
            <p>Shopping Cart: { cart.length > 0 && `${cart.length} Item${cart.length === 1 ? '' : 's'}` }</p>

            <ul className="hidden">
                {cart.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.title} {item.price}
                        </li>
                    )
                })}
            </ul>
            
            <p>Total: {formatUSDHandler.format(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))}</p>

            <button className="btn">Check out</button>
        </div>
    )
}

export default Cart