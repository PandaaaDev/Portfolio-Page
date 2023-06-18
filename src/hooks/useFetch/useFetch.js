import { useState, useEffect } from 'react';
import axios from 'axios';
/**
 * @param {string} url
 */
const useNextApiFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchData = async (url) => {
		axios
			.get(url)
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
	useEffect(() => {
		const currentUrl = window.location.origin;
		fetchData(currentUrl + url);
	}, [url]);
	console.log({ data, loading, error });
	return { data, loading, error };
};
/**
 * @param {string} url
 */
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchData = async (url) => {
		axios
			.get(url)
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
	useEffect(() => {
		fetchData(url);
	}, [url]);

	return { data, loading, error };
};
export { useNextApiFetch };
export default useFetch;
