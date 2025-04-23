import React, { useEffect, useState } from 'react'

const Filters = (props) => {
    const { data, handleUpdateCategories } = props;

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        const newCategories = []

        data?.products.map((item) => {
            item.categories.forEach((category) => {
                !newCategories.includes(category) ? newCategories.push(category) : null;
            });
        });

        setCategories(newCategories)
    }, [data]);

    return (
        <div className="mr-20 lg:w-1/5">
            <button>Filters</button>
            <h2 className="mb-8 font-bold text-4xl flex justify-between items-end">Filters <button className="text-base font-normal ml-1">Clear</button></h2>
            <ul>
                {categories.map((category, index) => {
                    return (
                        <div className="" key={index}>
                            <input id={category} type="checkbox" onChange={(event) => handleUpdateCategories(category)} />
                            <label className="ml-2" htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Filters