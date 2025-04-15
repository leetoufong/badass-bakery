const Products = (props) => {
    const { setCart, data, items } = props;

    return (
        <ul className="grid grid-cols-4 gap-4">
            {data.products.map((item, index) => {
                return (
                    <li key={index}>
                        <img src={item.image} />
                        <h4 className="text-lg font-bold">{item.title}</h4>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button
                            className="btn"
                            onClick={() => {
                                setCart(prev => [...prev, item]);
                            }}
                        >
                            +Add <span className="sr-only">to cart</span>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Products