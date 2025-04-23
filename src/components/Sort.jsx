const Sort = (props) => {
    const { data, setProducts } = props;

    const handleProductSort = (value) => {
        switch (value) {
            case 'price-low':
                setProducts(prevProducts => [...prevProducts.sort((a, b) => a.price - b.price)]);
                break;
            case 'price-high':
                setProducts(prevProducts => [...prevProducts.sort((a, b) => b.price - a.price)]);
                break;
            // case 'rating-low':
            //     break;
            // case 'rating-low':
            //     break;
            default:
                setProducts(data.products);
        }
    }

    return (
        <header className="flex justify-end mb-8">
            <label htmlFor="sort"><strong>Sort by</strong>:</label>
            <select id="sort" onChange={(event) => handleProductSort(event.target.value)}>
                <option>All</option>
                <option value="price-low">Lowest Price</option>
                <option value="price-high">Highest Price</option>
                {/* <option value="rating-low">Lowest Rating</option>
                <option value="rating-high">Highest Rating</option> */}
            </select>
        </header>
    )
}

export default Sort