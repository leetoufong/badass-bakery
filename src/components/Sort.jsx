const Sort = (props) => {
    const { handleProductSort } = props;

    return (
        <header className="flex justify-end mb-8">
            <label htmlFor="sort"><strong>Sort by</strong>:</label>
            <select id="sort" onChange={(event) => handleProductSort(event.target.value)}>
                <option value="">All</option>
                <option value="price-low">Lowest Price</option>
                <option value="price-high">Highest Price</option>
            </select>
        </header>
    )
}

export default Sort