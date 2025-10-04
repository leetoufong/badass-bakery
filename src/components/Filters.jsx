import React, { useEffect, useState } from 'react'

const Filters = (props) => {
    const { products, handleUpdateFilters } = props;
    const [ categories, setCategories ] = useState([]);
    const [ active, setActive ] = useState(false);

    // Set products and categories by default so we can render
    useEffect(() => {
        if (products) {
            const newCategories = [];

            products.map((product) => {
                product.categories.forEach((category) => {
                    if (!newCategories.includes(category)) {
                        newCategories.push(category);
                    }
                });
            });

            setCategories(newCategories);
        }
    }, [products]);

    return (
        <div>
            <h2 className="mb-4 font-bold text-3xl flex justify-between items-end">
                <button className="lg:cursor-text" onClick={() => setActive(active => !active)}>Filters</button>
            </h2>
            <ul className={`${active ? 'block' : 'hidden'} lg:block`}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <input id={category} type="checkbox" onChange={() => handleUpdateFilters(category)} />
                        <label className="ml-2" htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Filters