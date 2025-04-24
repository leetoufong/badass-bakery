import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatUSD } from "../helpers/formatUSD";
// import Filters from "../components/Filters";
// import Sort from "../components/Sort";
import StarRating from "../components/StarRating";

const Catalog = (props) => {
    const { setCart, data } = props;
    const [ catalog, setCatalog ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ filters, setFilters ] = useState([]);

    // Set products and categories by default so we can render
    useEffect(() => {
        if (data) {
            setCatalog([...data.products]);
            setProducts([...data.products]);

            const newCategories = [];

            data.products.map((item) => {
                item.categories.forEach((category) => {
                    if (!newCategories.includes(category)) {
                        newCategories.push(category);
                    }
                });
            });

            setCategories(newCategories);
        }
    }, [data]);

    // Render products based on filter changes
    useEffect(() => {
        if (!filters.length) {
            setProducts(catalog);
        }
        else {
            // render newProducts list based on filters
            const productsToRender = [];

            // loop through each filter
            filters.forEach((filter) => {
                // loop through each product
                catalog.forEach((product) => {
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
    }, [filters]);

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
                setProducts(catalog);
        }
    }

    return (
        <div className="flex">
            <aside className="lg:w-1/5 lg:pr-10">
                <h2 className="mb-8 font-bold text-4xl flex justify-between items-end">Filters</h2>
                {categories.map((category, index) => (
                    <div key={index}>
                        <input id={category} type="checkbox" onChange={() => handleUpdateFilters(category)} />
                        <label className="ml-2" htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                    </div>
                ))}
            </aside>

            <div className="lg:w-4/5">
                <header className="flex justify-end mb-8">
                    <label htmlFor="sort"><strong>Sort by</strong>:</label>
                    <select id="sort" onChange={(event) => handleProductSort(event.target.value)}>
                        <option value="">All</option>
                        <option value="price-low">Lowest Price</option>
                        <option value="price-high">Highest Price</option>
                        {/* <option value="rating-low">Lowest Rating</option>
                        <option value="rating-high">Highest Rating</option> */}
                    </select>
                </header>
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