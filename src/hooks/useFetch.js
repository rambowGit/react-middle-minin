import { useCallback, useEffect, useState } from "react";

const useFetch = (url, requesrParams = {}) => {
    
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const params = new URLSearchParams(requesrParams.params).toString();
    
    fetch(url + '?' + params, requesrParams)
    .then(res => {
      if (!res.ok) {
        throw new Error('could not fetch the data for that resource');
      }
      return res.json();
    })
    .then((data) => {
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false);
      console.error('** Data fetching error: ', err.message)
      setError(err.message);
    });
    
  }, []);
  
  const refetch = useCallback((requesrParams={}) => {
    const params = new URLSearchParams(requesrParams.params).toString();
    
    fetch(url + '?' + params, requesrParams)
    .then(res => {
      if (!res.ok) {
        throw new Error('could not fetch the data for that resource');
      }
      return res.json();
    })
    .then((data) => {
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false);
      console.error('** Data fetching error: ', err.message)
      setError(err.message);
    });
    
  }, []);
  
  return { data, isLoading, error, refetch }
}

export default useFetch;