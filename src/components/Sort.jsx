const Sort = (props) => {
    const { handleProductSort } = props;

    return (
        <header className="flex items-center justify-end mb-8">
            <label className="mr-2" htmlFor="sort"><strong>Sort by</strong>:</label>
            <select id="sort" className="border border-gray-400 rounded p-1" onChange={(event) => handleProductSort(event.target.value)}>
                <option value="">All</option>
                <option value="price-low">Lowest Price</option>
                <option value="price-high">Highest Price</option>
            </select>
        </header>
    )
}

export default Sort