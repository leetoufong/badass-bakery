import { useEffect, useState } from 'react'

const useFetchData = () => {
    const DATA_URL = '/store.json';
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                const response = await fetch(DATA_URL);
                const json = await response.json();

                setData(json)
            }
            catch(err) {
                setError(true);
                setErrorMessage('Error message: ', err);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        data,
        loading,
        error,
        errorMessage
    )
}

export default useFetchData
