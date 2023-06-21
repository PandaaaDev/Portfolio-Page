import { useState, useEffect } from 'react';
import axios from 'axios';
/**
 * @param {string} url
 */
const useNextApiFetch = (url) => {
	const fetchData = async (url, controller) => {
		axios
			.get(url, { signal: controller.signal })
			.then((res) => {
				setLoading(true);
				setData(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error);
				setLoading(false);
			});
	};
	// Seting up state
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// useEffect declaration
	useEffect(() => {
		const controller = new AbortController();
		const currentUrl = window.location.origin;
		fetchData(currentUrl + url, controller);
		// Clenup function
		return () => {
			controller.abort();
		};
	}, [url]);
	return { data, loading, error };
};
/**
 * @param {string} url
 */
const useFetch = (url) => {
	const fetchData = async (url, controller) => {
		axios
			.get(url, { signal: controller.signal })
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error);
				setLoading(false);
			});
	};
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const controller = new AbortController();
		fetchData(url, controller);
		return () => {
			controller.abort();
		};
	}, [url]);

	return { data, loading, error };
};
export { useNextApiFetch };
export default useFetch;
