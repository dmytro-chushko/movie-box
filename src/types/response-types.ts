declare module "axios" {
	export interface AxiosInstance {
		get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
	}
}

export interface IResponseWithList<T> {
	page: number;
	results: T[];
}

export interface IMovieItem {
	id: number;
	backdrop_path: string;
	poster_path: string;
	original_title: string;
	overview: string;
	release_date: string;
	vote_average: number;
}
