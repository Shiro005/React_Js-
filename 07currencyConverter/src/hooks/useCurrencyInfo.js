import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/75c38536abd407bb883e5354/latest/${currency}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result.conversion_rates);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencyInfo();
    }, [currency]);

    return { data, loading, error };
}

export default useCurrencyInfo;