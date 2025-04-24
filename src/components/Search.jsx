import { useState } from "react";

const Search = (props) => {
    const { handleSearchProducts } = props;
    const [ searchValue, setSearchValue ] = useState('');
    const [ valid, setValid ] = useState(true);

    const handleSendSearchQuery = (event) => {
        event.preventDefault();

        if (searchValue && searchValue.trim().length) {
            handleSearchProducts(searchValue);
        }
        else {
            setValid(false);
        }
    }

    return (
        <div className="mb-8">
            <h2 className="mb-4 font-bold text-3xl">Search</h2>
            <form onSubmit={(event) => handleSendSearchQuery(event)}>
                <label className="sr-only" htmlFor="search">Search by text</label>
                <div className="flex">
                    <input id="search" className={`w-full border border-gray-400 rounded p-1 ${!valid ? 'bg-red-50' : ''}`} type="text" placeholder="Search..." defaultValue={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                    <button className="btn ml-1" type='submit'>OK</button>
                </div>
            </form>
        </div>
    )
}

export default Search