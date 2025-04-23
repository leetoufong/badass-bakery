import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatUSD } from "../helpers/formatUSD";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import StarRating from "../components/StarRating";

const Products = (props) => {
    const { setCart, data } = props;
    const [ filteredCategories, setFilteredCategories ] = useState([]);
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        if (!filteredCategories.length) {
            setProducts(data?.products);
        }
        else {
            // render newProducts list based on filters
            const productsToRender = [];

            // loop through each filter
            filteredCategories.forEach((filter) => {
                // loop through each product
                data.products.forEach((product) => {
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
    }, [data, filteredCategories]);

    const handleUpdateCategories = (item) => {
        if (!filteredCategories.includes(item)) {
            setFilteredCategories(prevCategories => [...prevCategories, item]);
        }
        else {
            setFilteredCategories(prevCategories => prevCategories.filter((prevItem) => prevItem !== item));
        }
    };

    return (
        <div className="flex">
            <Filters data={data} setFilteredCategories={setFilteredCategories} handleUpdateCategories={handleUpdateCategories} />

            {/* Display product if: 1) No filters checked 2) Current filter === product's category */}
            <div className="lg:w-4/5">
                <Sort data={data} setProducts={setProducts} />

                <ul className=" grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
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

export default Products