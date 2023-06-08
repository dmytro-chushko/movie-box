export enum CONTENT_TYPE {
	MOVIES = "movie/",
	TV = "tv/",
}

export enum CONTENT_OPTIONS {
	UPCOMING = "upcoming",
	POPULAR = "popular",
	TOP_RATED = "top_rated",
	VIDEOS = "videos",
}

export type queryPerams = Record<string, string>;
