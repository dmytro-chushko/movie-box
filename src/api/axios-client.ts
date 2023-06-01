import axios, { AxiosError } from "axios";
import qs from "qs";

export const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
	},
	paramsSerializer: (params: Record<string, string>) => qs.stringify({ ...params }),
});

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(error: AxiosError) => {
		throw error;
	},
);
