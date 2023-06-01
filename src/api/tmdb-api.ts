import { CONTENT_OPTIONS, CONTENT_TYPE, queryPerams } from "types/query-types";
import { axiosClient } from "./axios-client";

export const tmdbAPi = {
	getContentList: (type: CONTENT_TYPE, options: CONTENT_OPTIONS, params: queryPerams) => {
		const url = type + options;

		return axiosClient.get(url, params);
	},
};
