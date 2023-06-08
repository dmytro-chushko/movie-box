import { ITrailer, TRAILER_TYPE } from "types/response-types";

export const getTrailer = (arr: ITrailer[]): string => {
	const trailer = arr.find(trailer => trailer.type === TRAILER_TYPE.TRAILER);
	if (!trailer) {
		return arr[0].key;
	}

	return trailer.key;
};
