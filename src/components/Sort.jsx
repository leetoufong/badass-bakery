const Sort = (props) => {
    const { data, products, setProducts } = props;

    const handleProductSort = (value) => {
        if (value.trim().length) {
            // setProducts(prevProducts => [...prevProducts, products.sort((a, b) => a.price - b.price)])
        }
        else {
            setProducts(data?.products);
        }
    }

    return (
        <header className="flex justify-end mb-8">
            <label htmlFor="sort"><strong>Sort by</strong>:</label>
            <select id="sort" onChange={(event) => handleProductSort(event.target.value)}>
                <option value="">All</option>
                <option value="price-low">Lowest Price</option>
                <option value="price-high">Highest Price</option>
                <option value="name">Name</option>
                <option value="rating-low">Rating</option>
                <option value="rating-high">Rating</option>
            </select>
        </header>
    )
}

export default Sort