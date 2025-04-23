import React, { useEffect, useState, useRef } from 'react'

const Filters = (props) => {
    const { data, handleUpdateCategories, setFilteredCategories } = props;
    const [ categories, setCategories ] = useState([]);
    const checkboxes = useRef(null);

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
            <h2 className="mb-8 font-bold text-4xl flex justify-between items-end">Filters <button className="text-base font-normal ml-1" onClick={() => {
                setFilteredCategories([]);

                checkboxes.current.querySelectorAll('[type="checkbox"]').forEach((checkbox) => {
                    checkbox.checked = false;
                });
            }}>Clear</button></h2>
            <ul ref={checkboxes}>
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