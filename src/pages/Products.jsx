import { formatUSD } from "../helpers/formatUSD";

const Products = (props) => {
    const { setCart, data, items } = props;

    return (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {data.products.map((item, index) => {
                return (
                    <li key={index}>
                        <div className="h-0 relative overflow-hidden pb-[75%] rounded-[0_14px_0_14px]">
                            <img className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src={item.image} />
                        </div>
                        <p className="text-lg font-bold">{item.title}</p>
                        <p>{item.description}</p>
                        <p>{formatUSD.format(item.price)}</p>
                        <button
                            className="btn mt-4"
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