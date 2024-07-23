import { useState, useEffect } from 'react'

function useFetch(url) {
    let [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        let getData = async () => {
            setIsPending(true);

            try {
                let request = await fetch(url);

                if (!request.ok) {
                    throw new Error(`Oops :-(, no users found! Looks like we’re on a wild goose chase :/`);
                }

                let responce = await request.json();
                setData(responce);
                setIsPending(false);
                setError(null);
            } catch (error) {
                console.log(error.message);
                setIsPending(false);
                setError(error.message);
            }
        }

        getData()
    }, [url]);

    return { data, isPending, error };
}

export { useFetch }