const Search = () => {
    return (
        <div className="mb-8">
            <h2 className="mb-4 font-bold text-3xl">Search</h2>
            <form>
                <label htmlFor="search">Search by text</label>
                <div className="flex">
                    <input id="search" className="w-full" type="text" placeholder="Search..." />
                    <button className="btn">OK</button>
                </div>
            </form>
        </div>
    )
}

export default Search