import React, { useEffect, useState } from 'react'

const Filters = (props) => {
    const { products, handleUpdateFilters } = props;
    const [ categories, setCategories ] = useState([]);

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
        <aside className="lg:w-1/5 lg:pr-10">
            <h2 className="mb-8 font-bold text-4xl flex justify-between items-end">Filters</h2>
            {categories.map((category, index) => (
                <div key={index}>
                    <input id={category} type="checkbox" onChange={() => handleUpdateFilters(category)} />
                    <label className="ml-2" htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                </div>
            ))}
        </aside>
    )
}

export default Filters