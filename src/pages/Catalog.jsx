import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatUSD } from "../helpers/formatUSD";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import StarRating from "../components/StarRating";

const Catalog = (props) => {
    const { setCart, data } = props;
    const [ products, setProducts ] = useState([]);
    const [ filters, setFilters ] = useState([]);

    // Set products and categories by default so we can render
    useEffect(() => {
        if (data) {
            setProducts([...data.products]);
        }
    }, [data]);

    // Render products based on filter changes
    useEffect(() => {
        handleRenderProductsBasedOnFilters();
    }, [filters]);

    const handleRenderProductsBasedOnFilters = () => {
        if (!filters.length) {
            // If no filters at all then set it back to default product view
            setProducts(data?.products);
        }
        else {
            // render newProducts list based on filters
            const productsToRender = [];

            // loop through each filter
            filters.forEach((filter) => {
                // loop through each product
                data?.products.forEach((product) => {
                    // Note: Product items can belong to multiple categories
                    // if filter is present in any of the categories
                    if (product.categories.includes(filter)) {
                        // add product to temp array
                        productsToRender.push(product);
                    }
                });

                setProducts(productsToRender);
            });
        }
    };

    const handleUpdateFilters = (item) => {
        if (!filters.includes(item)) {
            setFilters(prevFilters => [...prevFilters, item]);
        } else {
            setFilters(prevFilters => prevFilters.filter(prevItem => prevItem !== item));
        }
    };

    const handleProductSort = (sort) => {
        switch (sort) {
            case 'price-low':
                setProducts(prev => [...prev.sort((a, b) => a.price - b.price)]);
                break;

            case 'price-high':
                setProducts(prev => [...prev.sort((a, b) => b.price - a.price)]);
                break;

            default:
                handleRenderProductsBasedOnFilters();
        }
    };

    return (
        <div className="flex">
            <Filters products={data?.products} handleUpdateFilters={handleUpdateFilters} />

            <div className="lg:w-4/5">
                <Sort handleProductSort={handleProductSort} />

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {products?.map((item, index) => {
                        return (
                            <li className="rounded-xl p-4 hover:bg-pink-50" key={index}>
                                <Link to={`/item?id=${item.id}`}>
                                    <div className="rounded-xl border-1 border-gray-200">
                                        <img className="rounded-xl" src={item.image} />
                                    </div>
                                </Link>
                                <p className="text-lg font-bold">{item.title}</p>
                                <p>{formatUSD.format(item.price)}</p>
                                <button
                                    className="btn mt-4"
                                    onClick={() => {
                                        setCart(prev => [...prev, item]);
                                    }}
                                >
                                    +Add <span className="sr-only">to cart</span>
                                </button>
                                
                                <StarRating />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Catalog;