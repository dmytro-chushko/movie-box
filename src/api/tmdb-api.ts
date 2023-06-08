import { CONTENT_OPTIONS, CONTENT_TYPE, queryPerams } from "types/query-types";
import { axiosClient } from "./axios-client";
import { IResponseWithList } from "types/response-types";

export const tmdbAPi = {
	getContentList: <T>(type: CONTENT_TYPE, options: CONTENT_OPTIONS, params: queryPerams) => {
		const url = type + options;

		return axiosClient.get<IResponseWithList<T>>(url, params);
	},

	getContentItemById: <T>(type: CONTENT_TYPE, id: number, options?: CONTENT_OPTIONS) => {
		const url = `${type}${id}/${options && options}`;

		return axiosClient.get<T>(url);
	},
};
